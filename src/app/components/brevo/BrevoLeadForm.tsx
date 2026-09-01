import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from "react";
import { BREVO_FIELD_IDS, BREVO_FORM_HTML } from "./brevoFormMarkup";
import { getUtms } from "../../lib/getUtms";

export type BrevoPrefillFields = {
  nome: string;
  email: string;
  cpf: string;
  cidade: string;
  /** Rótulo textual do slider, ex: "2 anos". */
  tempoEntregador: string;
  /** Opt-in do checkbox de marketing — "1" ou "0" (ver RECEBER_PROMOS na Brevo). */
  receberPromos: string;
};

/** Resultado do envio — em erro, `fieldErrors` traz as mensagens específicas que a própria
 * Brevo devolve por campo (ex.: `{"WHATSAPP": "A informação fornecida não é válida..."}`,
 * telefone já usado, etc.), já em português. O chamador decide como exibir cada uma; quando
 * a Brevo não manda detalhe nenhum (erro de rede, timeout), `fieldErrors` fica vazio e cabe
 * ao chamador cair numa mensagem genérica. */
export type BrevoSubmitResult =
  | { status: "success" }
  | { status: "error"; fieldErrors: Record<string, string> }
  | { status: "timeout" };

export type BrevoLeadFormHandle = {
  prefill: (fields: BrevoPrefillFields) => void;
  triggerSubmit: () => Promise<BrevoSubmitResult>;
  /** Valida se o número foi preenchido e aplica/remove a borda de erro no widget (mesmo
   * padrão visual dos outros campos do FormCard). Retorna se está válido. */
  validateWhatsapp: () => boolean;
  /** Liga/desliga a borda vermelha do widget de WHATSAPP a partir de um erro vindo do
   * servidor (ex.: formato inválido, número já cadastrado) — mesmo visual de validateWhatsapp,
   * mas disparado depois da resposta da Brevo em vez de antes do envio. */
  setWhatsappServerError: (hasError: boolean) => void;
};

const SUCCESS_TIMEOUT_MS = 10000;

function hideRow(container: HTMLElement, id: string) {
  const el = container.querySelector<HTMLInputElement>(`#${CSS.escape(id)}`);
  const block = el?.closest(".sib-form-block") as HTMLElement | null;
  if (block?.parentElement) block.parentElement.style.display = "none";
}

function setHiddenField(container: HTMLElement, id: string, value: string) {
  const el = container.querySelector<HTMLInputElement>(`#${CSS.escape(id)}`);
  if (!el) return;
  el.value = value;
  el.required = false;
  el.removeAttribute("data-required");
  hideRow(container, id);
}

/**
 * Widget nativo visível do WHATSAPP — confirmado (duas vezes, com formato certo e errado) que
 * sincronizar esse campo via JS não funciona, sempre {"success":false,"errors":
 * {"WHATSAPP":"..."}}. O usuário precisa interagir de verdade com o <select>/<input> reais.
 *
 * O contorno branco que aparecia em volta do select/input era o CSS padrão do Brevo nos
 * wrappers `.entry__field` (nunca eram estilizados diretamente) — resolvido em
 * applyWhatsappLayout removendo background/border desses wrappers. Ver App.tsx pro campo
 * CIDADE ficar alinhado com esse aqui.
 */
type BrevoLeadFormProps = {
  /** Chamado quando o usuário digita no campo WHATSAPP enquanto ele está com erro (seja de
   * validação local — vazio — seja de erro devolvido pela Brevo no envio). O pai usa isso pra
   * esconder a mensagem de erro exibida, já que ela deixa de fazer sentido assim que o campo
   * que ela apontava é editado. */
  onWhatsappErrorCleared?: () => void;
};

const BrevoLeadForm = memo(
  forwardRef<BrevoLeadFormHandle, BrevoLeadFormProps>(function BrevoLeadForm(props, ref) {
    const { onWhatsappErrorCleared } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const injectedRef = useRef(false);
    const whatsappErrorRef = useRef(false);
    // Guarda a versão mais recente do callback num ref pra usar dentro do listener de "input"
    // (que só é registrado uma vez, no useEffect com deps `[]` logo abaixo) sem cair numa
    // closure presa na função da primeira renderização.
    const onWhatsappErrorClearedRef = useRef(onWhatsappErrorCleared);
    onWhatsappErrorClearedRef.current = onWhatsappErrorCleared;

    useEffect(() => {
      const container = containerRef.current;
      if (!container || injectedRef.current) return;
      container.innerHTML = BREVO_FORM_HTML;
      injectedRef.current = true;

      // Box-shadow de foco (nativo do navegador/sib-styles.css) — não dá pra remover via
      // style inline (:focus é um pseudo-estado, só CSS de verdade alcança). !important pra
      // garantir que ganha de qualquer coisa que o main.js do Brevo aplique depois.
      if (!document.getElementById("brevo-whatsapp-focus-override")) {
        const style = document.createElement("style");
        style.id = "brevo-whatsapp-focus-override";
        style.textContent = `
          .brevo-whatsapp-widget select:focus,
          .brevo-whatsapp-widget input:focus,
          .brevo-whatsapp-widget select:focus-visible,
          .brevo-whatsapp-widget input:focus-visible,
          .brevo-whatsapp-widget *:focus,
          .brevo-whatsapp-widget *:focus-within {
            box-shadow: none !important;
            outline: none !important;
          }
        `;
        document.head.appendChild(style);
      }

      // O submit não usa form.requestSubmit()/target=iframe (abordagem anterior) — o main.js
      // do Brevo não intercepta esse form (injetado depois da varredura inicial dele), e o
      // iframe escondido não deixava ler a resposta real (cross-origin: qualquer resposta,
      // sucesso ou erro, virava "sucesso" no onload). Ver triggerSubmit() — o envio agora é
      // feito via fetch() direto pro mesmo endpoint, lendo o JSON de verdade.
      const u = getUtms();
      setHiddenField(container, BREVO_FIELD_IDS.utmSource, u.utm_source);
      setHiddenField(container, BREVO_FIELD_IDS.utmMedium, u.utm_medium);
      setHiddenField(container, BREVO_FIELD_IDS.utmCampaign, u.utm_campaign);
      setHiddenField(container, BREVO_FIELD_IDS.trilha, "ifood");

      hideRow(container, BREVO_FIELD_IDS.nome);
      hideRow(container, BREVO_FIELD_IDS.email);
      hideRow(container, BREVO_FIELD_IDS.cpf);
      hideRow(container, BREVO_FIELD_IDS.cidade);
      hideRow(container, BREVO_FIELD_IDS.tempoEntregador);
      hideRow(container, BREVO_FIELD_IDS.receberPromos);

      const sibForm = container.querySelector<HTMLElement>("#sib-form");
      if (sibForm) {
        Array.from(sibForm.children).forEach((child) => {
          if (!(child instanceof HTMLElement)) return;
          if (child.querySelector(".sib-sms-field")) return; // linha do WHATSAPP, mantém
          child.style.display = "none";
        });
      }

      const applyWhatsappLayout = () => {
        const smsInput = container.querySelector<HTMLElement>(".sib-sms-input");
        if (!smsInput) return;

        [".sib-sms-input-wrapper", ".form__label-row", ".form__entry", ".sib-sms-field"].forEach((sel) => {
          const el = smsInput.closest<HTMLElement>(sel);
          if (el) {
            el.style.width = "100%";
            el.style.maxWidth = "none";
            el.style.boxSizing = "border-box";
            el.style.margin = "0";
            el.style.padding = "0";
          }
        });
        ["#sib-form", "#sib-container", "#sib-form-container", ".sib-form"].forEach((sel) => {
          const el = container.querySelector<HTMLElement>(sel);
          if (el) {
            el.style.width = "100%";
            el.style.maxWidth = "none";
            el.style.boxSizing = "border-box";
            el.style.padding = "0";
            el.style.backgroundColor = "transparent";
            el.style.border = "none";
            el.style.textAlign = "left";
          }
        });
        const sibSmsField = smsInput.closest<HTMLElement>(".sib-sms-field");
        if (sibSmsField) sibSmsField.style.padding = "0";
        const rowWrapper = sibSmsField?.parentElement as HTMLElement | undefined;
        if (rowWrapper) rowWrapper.style.padding = "0";
        const label = smsInput.closest(".form__entry")?.querySelector<HTMLElement>(".entry__label");
        if (label) {
          label.style.margin = "0 0 6px 0";
          label.style.display = "block";
          label.style.fontFamily = "'Fivo Sans Modern', sans-serif";
          label.style.fontWeight = "700";
          label.style.color = "#5b616f";
          label.style.fontSize = "12px";
          label.style.letterSpacing = "0.6px";
          label.style.textTransform = "uppercase";
        }

        const selectEl = smsInput.querySelector<HTMLSelectElement>("select");
        const telEl = smsInput.querySelector<HTMLInputElement>('input[type="tel"]');
        smsInput.style.width = "100%";
        smsInput.style.maxWidth = "100%";
        smsInput.style.display = "grid";
        // 100px + 8px de gap deixava pouco espaço pro número (cortava ~11 dígitos) — reduzido
        // o select e o gap pra sobrar mais espaço no campo de telefone.
        smsInput.style.gridTemplateColumns = "88px 1fr";
        smsInput.style.gap = "6px";
        smsInput.style.alignItems = "center";
        // overflow:hidden com height fixo em 48px estava cortando a base do campo — o
        // conteúdo interno (select principalmente) parece ficar um pouco mais alto que isso
        // mesmo com border-box. Tira o clip e dá um pouco de folga na altura.
        smsInput.style.height = "50px";
        var selectField = smsInput.children[0] as HTMLElement | undefined;
        var inputField = smsInput.children[1] as HTMLElement | undefined;
        // ACHADO: o contorno branco vinha desses dois wrappers (.entry__field) — nunca
        // tinham sido estilizados, só o <select>/<input> de dentro deles. CSS padrão do
        // Brevo (sib-styles.css) deve aplicar fundo/borda neles por padrão.
        [selectField, inputField].forEach((f) => {
          if (!f) return;
          f.style.width = "100%";
          f.style.height = "48px";
          f.style.minWidth = "0";
          f.style.boxSizing = "border-box";
          f.style.background = "transparent";
          f.style.border = "none";
        });
        if (selectEl) selectEl.style.width = "100%";
        if (telEl) { telEl.style.width = "100%"; telEl.style.maxWidth = "100%"; }
        if (selectEl && selectEl.value === "+93") selectEl.value = "+55";
        [selectEl, telEl].forEach((el) => {
          if (!el) return;
          el.style.backgroundColor = "#000";
          // Borda de erro (mesmo #ea1d2c dos outros campos) fica só no "Número" — preservada
          // via whatsappErrorRef porque essa função reroda (retries + observer) e resetaria
          // um valor hardcoded. Ver validateWhatsapp()/clearWhatsappError.
          el.style.border = el === telEl && whatsappErrorRef.current ? "1px solid #ea1d2c" : "none";
          el.style.borderRadius = "8px";
          el.style.color = "#e5e7eb";
          el.style.fontSize = "14px";
          el.style.padding = "13px 16px";
          el.style.fontFamily = "Archivo, sans-serif";
          el.style.boxSizing = "border-box";
          el.style.height = "48px";
          el.style.lineHeight = "20px";
          (el.style as any).appearance = "none";
          (el.style as any).webkitAppearance = "none";
        });
        // Padding mais justo no select (88px é pouco pro texto "+55 BR" + seta com o padding
        // padrão de 16px) — reduz os dois lados sem deixar o texto colado na borda.
        if (selectEl) { selectEl.style.paddingLeft = "10px"; selectEl.style.paddingRight = "20px"; }

        const tooltipBox = smsInput.parentElement?.querySelector<HTMLElement>(".sib-sms-tooltip__box");
        if (tooltipBox) tooltipBox.style.display = "none";
        const spec = smsInput.closest(".form__entry")?.querySelector<HTMLElement>(".entry__specification");
        if (spec) spec.style.display = "none";

        return telEl;
      };

      applyWhatsappLayout();
      const retryTimers = [50, 200, 500, 1000, 2000].map((ms) => setTimeout(applyWhatsappLayout, ms));

      const telElForObserver = container.querySelector<HTMLInputElement>('.sib-sms-input input[type="tel"]');
      let styleObserver: MutationObserver | undefined;
      if (telElForObserver) {
        let applying = false;
        styleObserver = new MutationObserver(() => {
          if (applying) return;
          applying = true;
          applyWhatsappLayout();
          applying = false;
        });
        styleObserver.observe(telElForObserver, { attributes: true, attributeFilter: ["style"] });
      }

      // Limpa a borda de erro assim que o usuário digita, igual ao onChange dos outros campos.
      // Só avisa o pai (pra esconder a mensagem de erro) se realmente havia um erro antes —
      // senão dispararia em toda digitação, mesmo sem nunca ter tido erro.
      const clearWhatsappError = () => {
        const hadError = whatsappErrorRef.current;
        whatsappErrorRef.current = false;
        telElForObserver!.style.border = "none";
        if (hadError) onWhatsappErrorClearedRef.current?.();
      };
      telElForObserver?.addEventListener("input", clearWhatsappError);

      return () => {
        retryTimers.forEach(clearTimeout);
        styleObserver?.disconnect();
        telElForObserver?.removeEventListener("input", clearWhatsappError);
      };
    }, []);

    useImperativeHandle(ref, () => ({
      prefill(fields) {
        const container = containerRef.current;
        if (!container) return;

        setHiddenField(container, BREVO_FIELD_IDS.nome, fields.nome);
        setHiddenField(container, BREVO_FIELD_IDS.cpf, fields.cpf);
        setHiddenField(container, BREVO_FIELD_IDS.cidade, fields.cidade);
        setHiddenField(container, BREVO_FIELD_IDS.tempoEntregador, fields.tempoEntregador);
        setHiddenField(container, BREVO_FIELD_IDS.receberPromos, fields.receberPromos);

        const emailEl = container.querySelector<HTMLInputElement>(`#${BREVO_FIELD_IDS.email}`);
        if (emailEl) {
          emailEl.value = fields.email;
          emailEl.dispatchEvent(new Event("input", { bubbles: true }));
          emailEl.dispatchEvent(new Event("change", { bubbles: true }));
        }
        // WHATSAPP não é tocado aqui — é o campo real e visível, o usuário preenche direto.
      },

      async triggerSubmit(): Promise<BrevoSubmitResult> {
        const container = containerRef.current;
        const form = container?.querySelector<HTMLFormElement>("#sib-form");
        if (!form) return { status: "error", fieldErrors: {} };

        // Envio via fetch() direto pro mesmo endpoint do form (form.action), lendo o JSON
        // de verdade — {"success": true/false, "errors": {...}} — pra saber o resultado real
        // e repassar as mensagens específicas por campo que a própria Brevo já manda em
        // português (ex.: formato de telefone inválido, telefone já cadastrado). Abordagem
        // anterior (form.requestSubmit() mirando um iframe escondido) não conseguia ler a
        // resposta (cross-origin) e tratava "carregou" como sucesso mesmo em erro real.
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), SUCCESS_TIMEOUT_MS);

        try {
          const res = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            mode: "cors",
            signal: controller.signal,
          });
          const data = await res.json().catch(() => null);
          if (res.ok && data?.success) return { status: "success" };
          return { status: "error", fieldErrors: data?.errors ?? {} };
        } catch (err) {
          return controller.signal.aborted ? { status: "timeout" } : { status: "error", fieldErrors: {} };
        } finally {
          clearTimeout(timer);
        }
      },

      validateWhatsapp() {
        const container = containerRef.current;
        const telEl = container?.querySelector<HTMLInputElement>('.sib-sms-input input[type="tel"]');
        const ok = !!telEl?.value.trim();
        whatsappErrorRef.current = !ok;
        if (telEl) telEl.style.border = ok ? "none" : "1px solid #ea1d2c";
        return ok;
      },

      setWhatsappServerError(hasError) {
        const container = containerRef.current;
        const telEl = container?.querySelector<HTMLInputElement>('.sib-sms-input input[type="tel"]');
        whatsappErrorRef.current = hasError;
        if (telEl) telEl.style.border = hasError ? "1px solid #ea1d2c" : "none";
      },
    }));

    return <div className="brevo-whatsapp-widget" ref={containerRef} aria-hidden="false" />;
  })
);

export default BrevoLeadForm;
