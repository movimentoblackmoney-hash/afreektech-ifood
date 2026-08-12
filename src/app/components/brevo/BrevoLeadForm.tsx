import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from "react";
import { BREVO_FIELD_IDS, BREVO_FORM_HTML } from "./brevoFormMarkup";
import { getUtms } from "../../lib/getUtms";

export type BrevoPrefillFields = {
  nome: string;
  email: string;
  cidade: string;
  /** Rótulo textual do slider, ex: "2 anos". */
  tempoEntregador: string;
};

export type BrevoLeadFormHandle = {
  prefill: (fields: BrevoPrefillFields) => void;
  triggerSubmit: () => Promise<"success" | "error" | "timeout">;
};

const SUCCESS_TIMEOUT_MS = 10000;
const IFRAME_TARGET_NAME = "brevo-lead-submit-target";

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
const BrevoLeadForm = memo(
  forwardRef<BrevoLeadFormHandle>(function BrevoLeadForm(_props, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const injectedRef = useRef(false);

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

      // O submit real (form.requestSubmit()) estava navegando a página inteira pra URL de
      // ação, mostrando o JSON cru da resposta — sinal de que o main.js do Brevo não está
      // interceptando esse form específico (provavelmente por ele ter sido injetado depois
      // que o main.js já rodou a varredura inicial). Solução clássica: mirar o <form> num
      // <iframe> escondido (via target=), assim o POST acontece de verdade só que dentro do
      // iframe — a página principal nunca navega.
      if (!document.getElementById(IFRAME_TARGET_NAME)) {
        const iframe = document.createElement("iframe");
        iframe.name = IFRAME_TARGET_NAME;
        iframe.id = IFRAME_TARGET_NAME;
        iframe.style.display = "none";
        document.body.appendChild(iframe);
      }
      const sibFormEl = container.querySelector<HTMLFormElement>("#sib-form");
      if (sibFormEl) sibFormEl.target = IFRAME_TARGET_NAME;

      const u = getUtms();
      setHiddenField(container, BREVO_FIELD_IDS.utmSource, u.utm_source);
      setHiddenField(container, BREVO_FIELD_IDS.utmMedium, u.utm_medium);
      setHiddenField(container, BREVO_FIELD_IDS.utmCampaign, u.utm_campaign);
      setHiddenField(container, BREVO_FIELD_IDS.q1, "");
      setHiddenField(container, BREVO_FIELD_IDS.q2, "");
      setHiddenField(container, BREVO_FIELD_IDS.cpf, "");
      setHiddenField(container, BREVO_FIELD_IDS.trilha, "ifood");

      hideRow(container, BREVO_FIELD_IDS.nome);
      hideRow(container, BREVO_FIELD_IDS.email);
      hideRow(container, BREVO_FIELD_IDS.cidade);
      hideRow(container, BREVO_FIELD_IDS.tempoEntregador);

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
          el.style.border = "none";
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

      return () => {
        retryTimers.forEach(clearTimeout);
        styleObserver?.disconnect();
      };
    }, []);

    useImperativeHandle(ref, () => ({
      prefill(fields) {
        const container = containerRef.current;
        if (!container) return;

        setHiddenField(container, BREVO_FIELD_IDS.nome, fields.nome);
        setHiddenField(container, BREVO_FIELD_IDS.cidade, fields.cidade);
        setHiddenField(container, BREVO_FIELD_IDS.tempoEntregador, fields.tempoEntregador);

        const emailEl = container.querySelector<HTMLInputElement>(`#${BREVO_FIELD_IDS.email}`);
        if (emailEl) {
          emailEl.value = fields.email;
          emailEl.dispatchEvent(new Event("input", { bubbles: true }));
          emailEl.dispatchEvent(new Event("change", { bubbles: true }));
        }
        // WHATSAPP não é tocado aqui — é o campo real e visível, o usuário preenche direto.
      },

      triggerSubmit() {
        return new Promise((resolve) => {
          const container = containerRef.current;
          const form = container?.querySelector<HTMLFormElement>("#sib-form");
          const successEl = container?.querySelector<HTMLElement>("#success-message");
          const sibContainer = container?.querySelector<HTMLElement>("#sib-form-container");
          const iframe = document.getElementById(IFRAME_TARGET_NAME) as HTMLIFrameElement | null;
          if (!form || !successEl || !sibContainer) {
            resolve("error");
            return;
          }

          let settled = false;
          const finish = (result: "success" | "error" | "timeout") => {
            if (settled) return;
            settled = true;
            observer.disconnect();
            clearTimeout(timer);
            if (iframe) iframe.onload = null;
            resolve(result);
          };

          const errorEl = container!.querySelector<HTMLElement>("#error-message")!;
          const isVisible = (el: HTMLElement) =>
            el.offsetParent !== null && getComputedStyle(el).display !== "none";

          // Caminho 1: se o main.js do Brevo interceptar o submit (AJAX), ele alterna a
          // visibilidade desses painéis dentro da própria página — o observer pega isso.
          const observer = new MutationObserver(() => {
            if (isVisible(successEl)) finish("success");
            else if (isVisible(errorEl)) finish("error");
          });
          observer.observe(sibContainer, {
            attributes: true,
            attributeFilter: ["style", "class"],
            subtree: true,
          });

          // Caminho 2: como confirmamos que o form está submetendo de verdade (navegação real,
          // só que agora dentro do iframe escondido em vez da página toda), o "load" do iframe
          // é o sinal de que a resposta chegou. Não dá pra ler o conteúdo (cross-origin), mas
          // dá pra usar "carregou sem erro" como sucesso, já que a criação do contato já foi
          // confirmada manualmente funcionando por esse caminho.
          if (iframe) {
            iframe.onload = () => finish("success");
          }

          const timer = setTimeout(() => finish("timeout"), SUCCESS_TIMEOUT_MS);

          form.requestSubmit();
        });
      },
    }));

    return <div className="brevo-whatsapp-widget" ref={containerRef} aria-hidden="false" />;
  })
);

export default BrevoLeadForm;
