import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import LpWeb from "@/imports/LpWeb1440/index";
import LpMobile from "@/imports/LpMobile390/index";
import CardFormularioSuccess from "@/imports/CardFormulario/index";
import svgPaths from "@/imports/LpWeb1440/svg-56h0h74598";
import BrevoLeadForm, { type BrevoLeadFormHandle } from "./components/brevo/BrevoLeadForm";

// ─── Shared constants ────────────────────────────────────────────────────────

const TICKS = ["Não sou", "6 meses", "1 ano", "2 anos", "5 anos", "10+ anos"];
const TICKS_MOBILE = ["Não sou", "10+ anos"];

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

function FormCard({
  onSubmit,
  mobileTicks = false,
}: {
  onSubmit: () => void;
  mobileTicks?: boolean;
}) {
  // nome/email/cidade são campos nossos, sincronizados pro Brevo no submit. telefone é o
  // widget real e visível do Brevo (BrevoLeadForm) — ver comentário lá sobre por quê.
  const [fields, setFields] = useState({ nome: "", email: "", cidade: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [slider, setSlider] = useState(2);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const brevoRef = useRef<BrevoLeadFormHandle>(null);

  const bind = (key: keyof typeof fields) => ({
    value: fields[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: false }));
    },
    style: { borderColor: errors[key] ? "#ea1d2c" : "rgba(255,255,255,0.16)" } as React.CSSProperties,
  });

  async function handleSubmit() {
    const newErrors: Record<string, boolean> = {};
    (Object.keys(fields) as (keyof typeof fields)[]).forEach((k) => {
      if (!fields[k].trim()) newErrors[k] = true;
    });
    // WHATSAPP é o widget real do Brevo, não faz parte de `fields` — validado à parte (ver
    // BrevoLeadForm.validateWhatsapp, que também liga/desliga a borda vermelha nele).
    const whatsappOk = brevoRef.current?.validateWhatsapp() ?? true;
    if (Object.keys(newErrors).length || !whatsappOk) { setErrors(newErrors); return; }

    setStatus("submitting");
    brevoRef.current?.prefill({
      nome: fields.nome,
      email: fields.email,
      cidade: fields.cidade,
      tempoEntregador: TICKS[slider],
    });
    const result = await brevoRef.current?.triggerSubmit();
    if (result === "success") {
      onSubmit();
    } else {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full bg-black rounded-[8px] px-[16px] py-[13px] text-[#e5e7eb] text-[14px] outline-none placeholder:text-[#5b616f] border border-solid focus:border-white/40 transition-colors";
  const labelCls =
    "font-['Fivo_Sans_Modern:Bold',sans-serif] not-italic text-[#5b616f] text-[12px] tracking-[0.6px]";

  const ticks = mobileTicks ? TICKS_MOBILE : TICKS;

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
              <BrevoLeadForm ref={brevoRef} />
            </div>
            {/* mt empírico (só quando lado a lado, mesmo breakpoint de container acima):
                alinha com o rótulo "WHATSAPP" ao lado — ver BrevoLeadForm.tsx. Empilhado não
                precisa desse ajuste. */}
            <div className="flex flex-col gap-[6px] flex-1 min-w-0 @[480px]:mt-[5px]">
              <p className={labelCls}>CIDADE</p>
              <input
                type="text"
                placeholder="Sua cidade"
                className={`${inputCls} @[480px]:mt-[3px]`}
                {...bind("cidade")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[16px] w-full">
            <p className={labelCls}>HÁ QUANTO TEMPO VOCÊ É ENTREGADOR?</p>
            <div className="flex flex-col gap-[12px] w-full">
              <input
                type="range"
                min={0}
                max={mobileTicks ? 5 : 5}
                value={slider}
                onChange={(e) => setSlider(Number(e.target.value))}
                className="delivery-range w-full"
              />
              <div className="flex justify-between w-full">
                {ticks.map((t) => (
                  <span key={t} className="text-[12px] text-[#5b616f] font-['Fivo_Sans_Modern:Regular',sans-serif]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {status === "error" && (
            <p className="text-[#ea1d2c] text-[12px] text-center w-full font-['Archivo:Regular',sans-serif]">
              Não conseguimos enviar sua inscrição. Confira seus dados e tente de novo.
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === "submitting"}
            className="bg-[#ea1d2c] rounded-[8px] w-full flex items-center justify-center gap-[9px] px-[32px] py-[16px] hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <p className="font-['Bomstad_Display:Black',sans-serif] not-italic text-[12px] text-white tracking-[0.12px] whitespace-nowrap">
              {status === "submitting" ? "ENVIANDO..." : "GARANTIR MINHA VAGA GRÁTIS"}
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

  // Inject slider thumb styles once
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
      .delivery-range {
        -webkit-appearance: none;
        appearance: none;
        height: 4px;
        background: #ea1d2c;
        border-radius: 2px;
        outline: none;
        cursor: pointer;
      }
      .delivery-range::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px; height: 16px;
        border-radius: 8px;
        background: #ea1d2c;
        box-shadow: 0 2px 4px rgba(0,0,0,0.35);
        cursor: pointer;
      }
      .delivery-range::-moz-range-thumb {
        width: 16px; height: 16px;
        border-radius: 8px;
        background: #ea1d2c;
        border: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.35);
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  // Não é mais position:absolute — precisa fluir normalmente pra determinar a altura real
  // do cardEl (ver comentário em useLpWiring sobre o botão sendo cortado antes).
  const formPortal = (cardEl: HTMLElement | null, mobile = false) =>
    cardEl &&
    createPortal(
      <div className="rounded-[16px] w-full" style={{ visibility: "visible" }}>
        {submitted ? (
          <CardFormularioSuccess />
        ) : (
          <FormCard onSubmit={() => setSubmitted(true)} mobileTicks={mobile} />
        )}
      </div>,
      cardEl
    );

  return isDesktop ? (
    <div ref={desktopRef} className="size-full">
      <LpWeb />
      {formPortal(desktopCardEl, false)}
    </div>
  ) : (
    <div ref={mobileRef} className="size-full">
      <LpMobile />
      {formPortal(mobileCardEl, true)}
    </div>
  );
}
