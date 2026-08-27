import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import LpWeb from "@/imports/LpWeb1440/index";
import LpMobile from "@/imports/LpMobile390/index";
import CardFormularioSuccess from "@/imports/CardFormulario/index";
import svgPaths from "@/imports/LpWeb1440/svg-56h0h74598";
import BrevoLeadForm, { type BrevoLeadFormHandle } from "./components/brevo/BrevoLeadForm";
import IconSprite from "./components/IconSprite";
import CidadeCombo, { type CidadeComboHandle } from "./components/CidadeCombo";

// Mesma página única (MBM) usada no formulário do Mover — cobre termos de uso + política de
// privacidade/dados, os dois links do checkbox apontam pra mesma URL. Ver InscricaoModal.tsx
// no repo do Mover pro mesmo padrão.
const LEGAL_URL = "https://movimentoblackmoneyenterprise.ac-page.com/mbmpotiticadedados";

// ─── Opções do select "há quanto tempo você é entregador" ────────────────────
// value = o que é enviado pro Brevo (TEMPO_ENTREGADOR) — código, não o texto legível,
// conforme especificado no doc de referência (LP-Otimizacao-Copy-e-Icones.md §7).

const TEMPO_ENTREGADOR_OPTIONS = [
  { value: "nao-sou", label: "Não sou entregador" },
  { value: "menos-1", label: "Menos de 1 ano" },
  { value: "1-3", label: "1 a 3 anos" },
  { value: "3-5", label: "3 a 5 anos" },
  { value: "5-10", label: "5 a 10 anos" },
  { value: "10-mais", label: "10 anos ou mais" },
];

// ─── Arrow icon ──────────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
      <path
        d={svgPaths.pa112780}
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.375"
      />
    </svg>
  );
}

// ─── React form card (uma única instância montada por vez — ver useIsDesktop) ─

const EMPTY_FIELDS = { nome: "", email: "", cidade: "", tempoEntregador: "" };

// Nomes dos campos do lado da Brevo (na resposta de erro) pros nossos campos locais — usado
// pra saber em qual input colocar a borda vermelha quando o erro vem de um campo específico.
const BREVO_FIELD_TO_LOCAL: Record<string, keyof typeof EMPTY_FIELDS | "whatsapp"> = {
  EMAIL: "email",
  NOME: "nome",
  CIDADE: "cidade",
  TEMPO_ENTREGADOR: "tempoEntregador",
  WHATSAPP: "whatsapp",
};

const GENERIC_ERROR_MESSAGE = "Não conseguimos enviar sua inscrição. Confira seus dados e tente de novo.";

function FormCard({ onSubmit }: { onSubmit: () => void }) {
  // nome/email/cidade/tempoEntregador são campos nossos, sincronizados pro Brevo no submit.
  // telefone é o widget real e visível do Brevo (BrevoLeadForm) — ver comentário lá sobre por quê.
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  // Mensagem exibida quando status === "error" — por padrão a genérica, mas quando a Brevo
  // devolve uma mensagem específica por campo (ex.: telefone em formato inválido, telefone já
  // cadastrado), mostramos ela em vez de esconder o motivo real atrás de um texto genérico.
  const [errorMessage, setErrorMessage] = useState(GENERIC_ERROR_MESSAGE);
  // Qual campo local gerou a mensagem acima (ou null pra erro genérico/sem campo específico) —
  // usado só pra saber quando escondê-la: some assim que o usuário mexe justamente nesse campo,
  // não em qualquer campo do form.
  const [erroredField, setErroredField] = useState<keyof typeof fields | "whatsapp" | null>(null);
  // Consentimento LGPD — mesmo padrão do Mover (ver InscricaoModal.tsx): termos obrigatórios
  // pra enviar, marketing é opcional e não bloqueia nada.
  const [consent, setConsent] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const brevoRef = useRef<BrevoLeadFormHandle>(null);
  const cidadeRef = useRef<CidadeComboHandle>(null);

  function clearErrorMessageIfMatches(key: keyof typeof fields | "whatsapp") {
    if (erroredField === key) {
      setStatus("idle");
      setErroredField(null);
    }
  }

  const bind = (key: keyof typeof fields) => ({
    value: fields[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: false }));
      clearErrorMessageIfMatches(key);
    },
    style: { borderColor: errors[key] ? "#ea1d2c" : "rgba(255,255,255,0.16)" } as React.CSSProperties,
  });

  async function handleSubmit() {
    const newErrors: Record<string, boolean> = {};
    (Object.keys(fields) as (keyof typeof fields)[]).forEach((k) => {
      if (!fields[k].trim()) newErrors[k] = true;
    });
    // Cidade digitada mas não escolhida de fato na lista (ex.: "sao paul", sem selecionar
    // "São Paulo - SP") não vale — evita mandar cidade inexistente/incompleta pro Brevo.
    if (!newErrors.cidade && !(cidadeRef.current?.isValid() ?? true)) newErrors.cidade = true;
    if (!consent) newErrors.consent = true;
    // WHATSAPP é o widget real do Brevo, não faz parte de `fields` — validado à parte (ver
    // BrevoLeadForm.validateWhatsapp, que também liga/desliga a borda vermelha nele).
    const whatsappOk = brevoRef.current?.validateWhatsapp() ?? true;
    if (Object.keys(newErrors).length || !whatsappOk) { setErrors(newErrors); return; }

    setStatus("submitting");
    brevoRef.current?.setWhatsappServerError(false);
    brevoRef.current?.prefill({
      nome: fields.nome,
      email: fields.email,
      cidade: fields.cidade,
      tempoEntregador: fields.tempoEntregador,
    });
    const result = await brevoRef.current?.triggerSubmit();
    if (result?.status === "success") {
      onSubmit();
      return;
    }

    setStatus("error");
    if (result?.status === "error" && Object.keys(result.fieldErrors).length) {
      // A Brevo já manda a mensagem certa em português por campo (formato inválido, telefone
      // já cadastrado, etc.) — mostramos ela direto em vez de esconder atrás de um texto
      // genérico. Com mais de um campo com erro, mostra o primeiro (e é esse campo que, ao ser
      // editado, some com a mensagem); os outros ainda ganham a borda vermelha.
      const [firstBrevoField, firstMessage] = Object.entries(result.fieldErrors)[0];
      setErrorMessage(firstMessage);
      setErroredField(BREVO_FIELD_TO_LOCAL[firstBrevoField] ?? null);

      const fieldErrorState: Record<string, boolean> = {};
      for (const brevoField of Object.keys(result.fieldErrors)) {
        const local = BREVO_FIELD_TO_LOCAL[brevoField];
        if (local === "whatsapp") brevoRef.current?.setWhatsappServerError(true);
        else if (local) fieldErrorState[local] = true;
      }
      setErrors((er) => ({ ...er, ...fieldErrorState }));
    } else {
      setErrorMessage(GENERIC_ERROR_MESSAGE);
      setErroredField(null);
    }
  }

  const inputCls =
    "w-full bg-black rounded-[8px] px-[16px] py-[13px] text-[#e5e7eb] text-[14px] outline-none placeholder:text-[#5b616f] border border-solid focus:border-white/40 transition-colors";
  const labelCls =
    "font-['Fivo_Sans_Modern:Bold',sans-serif] not-italic text-[#5b616f] text-[12px] tracking-[0.6px]";
  // select nativo: appearance-none tira a seta do navegador (que renderizava colada na borda,
  // fora do padrão visual do resto do form) — troca por uma seta customizada via background-image,
  // com pr maior que o pl pra abrir espaço pra ela sem invadir o texto selecionado.
  const selectCls =
    "w-full bg-black rounded-[8px] pl-[16px] pr-[40px] py-[13px] text-[#e5e7eb] text-[14px] outline-none border border-solid focus:border-white/40 transition-colors appearance-none bg-no-repeat bg-[length:16px] bg-[position:right_16px_center] cursor-pointer";
  const selectArrowStyle: React.CSSProperties = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235b616f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
  };

  return (
    <div className="@container bg-[#1a1a20] relative rounded-[16px] size-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-[24px] items-start px-[40px] py-[42px] w-full">

          <div className="flex flex-col gap-[6px] w-full">
            <p className={labelCls}>NOME</p>
            <input type="text" placeholder="Seu nome" className={inputCls} {...bind("nome")} />
          </div>

          <div className="flex flex-col gap-[6px] w-full">
            <p className={labelCls}>E-MAIL</p>
            <input type="email" placeholder="seu@email.com" className={inputCls} {...bind("email")} />
          </div>

          {/* Empilha se o CARD em si estiver estreito (container query, @container no wrapper
              do card acima) — não a viewport/mobileTicks: o card pode estar apertado mesmo
              quando a árvore "desktop" está montada (ex: viewport intermediária tipo tablet,
              onde o card ainda é só metade da largura da seção). Lado a lado precisa de espaço
              suficiente pro WHATSAPP (select+número) e CIDADE não encolherem demais. */}
          <div className="flex flex-col @[480px]:flex-row gap-[16px] @[480px]:gap-[12px] w-full">
            <div className="flex flex-col gap-[6px] flex-1 min-w-0">
              {/* Widget real do Brevo (select de país + input) — não é um input nosso, ver
                  BrevoLeadForm.tsx. Também injeta escondidos o resto do form (nome/email/etc). */}
              <BrevoLeadForm ref={brevoRef} onWhatsappErrorCleared={() => clearErrorMessageIfMatches("whatsapp")} />
            </div>
            {/* mt empírico (só quando lado a lado, mesmo breakpoint de container acima):
                alinha com o rótulo "WHATSAPP" ao lado — ver BrevoLeadForm.tsx. Empilhado não
                precisa desse ajuste. */}
            <div className="flex flex-col gap-[6px] flex-1 min-w-0 @[480px]:mt-[5px]">
              <p className={labelCls}>CIDADE</p>
              <CidadeCombo
                ref={cidadeRef}
                value={fields.cidade}
                error={errors.cidade}
                className="@[480px]:mt-[3px]"
                onChange={(v) => {
                  setFields((f) => ({ ...f, cidade: v }));
                  setErrors((er) => ({ ...er, cidade: false }));
                  clearErrorMessageIfMatches("cidade");
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[6px] w-full">
            <p className={labelCls}>HÁ QUANTO TEMPO VOCÊ É ENTREGADOR?</p>
            <select
              className={selectCls}
              {...bind("tempoEntregador")}
              style={{ ...selectArrowStyle, ...bind("tempoEntregador").style }}
            >
              <option value="">Selecione</option>
              {TEMPO_ENTREGADOR_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-[10px] w-full">
            <label className="flex items-start gap-[8px] cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  setErrors((er) => ({ ...er, consent: false }));
                }}
                className="mt-[2px] shrink-0 accent-[#ea1d2c]"
              />
              <span className={`text-[13px] ${errors.consent ? "text-[#ea1d2c]" : "text-[#c7cbd4]"}`}>
                Li e concordo com os{" "}
                <a href={LEGAL_URL} target="_blank" rel="noopener noreferrer" className="underline" onClick={(e) => e.stopPropagation()}>
                  Termos de Uso
                </a>{" "}
                e a{" "}
                <a href={LEGAL_URL} target="_blank" rel="noopener noreferrer" className="underline" onClick={(e) => e.stopPropagation()}>
                  Política de Privacidade
                </a>
                .*
              </span>
            </label>
            <label className="flex items-start gap-[8px] cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-[2px] shrink-0 accent-[#ea1d2c]"
              />
              <span className="text-[13px] text-[#c7cbd4]">
                Aceito receber novidades, conteúdos e ofertas exclusivas por e-mail e outros canais.
              </span>
            </label>
          </div>

          {status === "error" && (
            <p className="text-[#ea1d2c] text-[12px] text-center w-full font-['Archivo:Regular',sans-serif]">
              {errorMessage}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === "submitting"}
            className="bg-[#ea1d2c] rounded-[8px] w-full flex items-center justify-center gap-[9px] px-[32px] py-[16px] hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <p className="font-['Bomstad_Display:Black',sans-serif] not-italic text-[12px] text-white tracking-[0.12px] whitespace-nowrap">
              {status === "submitting" ? "ENVIANDO..." : "QUERO COMEÇAR AGORA"}
            </p>
            {status !== "submitting" && <ArrowRight />}
          </button>

          <p className="text-[#5b616f] text-[12px] text-center w-full font-['Archivo:Regular',sans-serif]">
            Sem custo · Com certificado · No celular
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

// ─── Hook: qual árvore montar (768px = breakpoint "md" padrão do Tailwind) ────
//
// Antes, desktop e mobile ficavam as duas montadas ao mesmo tempo, só alternando `display`
// via CSS. Isso quebrava o form do Brevo (ids únicos tipo #sib-form/#EMAIL duplicados no DOM
// quando cada FormCard tinha sua própria instância) — ver plano de implementação. Agora só a
// árvore realmente visível é montada.

function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}

// ─── Hook: wire a rendered LP variant ────────────────────────────────────────

function useLpWiring(
  wrapperRef: React.RefObject<HTMLDivElement | null>,
  onSubmit: () => void,
  active: boolean
): HTMLElement | null {
  const [cardFormEl, setCardFormEl] = useState<HTMLElement | null>(null);

  // Depende de `active`: como agora só uma árvore (desktop OU mobile) fica montada por vez
  // (useIsDesktop), esse efeito precisa rodar de novo toda vez que a árvore é remontada, não
  // só uma vez no mount do App inteiro — senão a árvore que aparece depois de um resize nunca
  // seria wireada (CTAs não scrollam, form estático real do Figma não fica escondido).
  useEffect(() => {
    if (!active) { setCardFormEl(null); return; }
    const root = wrapperRef.current;
    if (!root) return;

    // Scroll all external CTAs to the inscription form
    const formSection = root.querySelector(
      '[data-name="10 · Inscrição / CTA Final"]'
    ) as HTMLElement | null;

    root.querySelectorAll('[data-name="LP/Botão · Primário"]').forEach((btn) => {
      if (!formSection?.contains(btn)) {
        (btn as HTMLElement).style.cursor = "pointer";
        btn.addEventListener("click", () =>
          formSection?.scrollIntoView({ behavior: "smooth" })
        );
      }
    });

    // Hide the static form card and expose its container for the React portal
    const cardForm = root.querySelector(
      '[data-name="Card · Formulário"]'
    ) as HTMLElement | null;

    if (cardForm) {
      // Antes só ficava visibility:hidden — mas os filhos decorativos originais do Figma
      // continuavam ocupando espaço (visibility:hidden não tira do fluxo), definindo a altura
      // do card (524px fixo) mesmo com nosso conteúdo real por cima. Isso cortava o botão de
      // envio quando nosso form ficava mais alto que esse valor fixo (ex: WHATSAPP+CIDADE
      // empilhados no mobile). Agora escondemos os filhos originais de verdade (display:none,
      // sai do fluxo) e deixamos o cardForm visível — ele passa a ser só o container do nosso
      // conteúdo real (portalizado, não mais position:absolute — ver formPortal em App()),
      // que agora define a altura de verdade.
      Array.from(cardForm.children).forEach((child) => {
        (child as HTMLElement).style.display = "none";
      });
      setCardFormEl(cardForm);
    }
  }, [active]);

  return cardFormEl;
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const isDesktop = useIsDesktop();

  const desktopCardEl = useLpWiring(desktopRef, () => setSubmitted(true), isDesktop);
  const mobileCardEl = useLpWiring(mobileRef, () => setSubmitted(true), !isDesktop);

  // Injeta estilos globais uma única vez (fix de imagem de fundo + altura mínima do Hero)
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Prevent background images from squashing on resize */
      .absolute.max-w-none {
        object-fit: cover;
        object-position: center top;
      }
      /* Hero section: guarantee a minimum height so the image never pancakes */
      [data-name="02 · Hero"] {
        min-height: 520px;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  // Não é mais position:absolute — precisa fluir normalmente pra determinar a altura real
  // do cardEl (ver comentário em useLpWiring sobre o botão sendo cortado antes).
  const formPortal = (cardEl: HTMLElement | null) =>
    cardEl &&
    createPortal(
      <div className="rounded-[16px] w-full" style={{ visibility: "visible" }}>
        {submitted ? (
          <CardFormularioSuccess />
        ) : (
          <FormCard onSubmit={() => setSubmitted(true)} />
        )}
      </div>,
      cardEl
    );

  return (
    <>
      <IconSprite />
      {isDesktop ? (
        <div ref={desktopRef} className="size-full">
          <LpWeb />
          {formPortal(desktopCardEl)}
        </div>
      ) : (
        <div ref={mobileRef} className="size-full">
          <LpMobile />
          {formPortal(mobileCardEl)}
        </div>
      )}
    </>
  );
}
