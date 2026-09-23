// Tipagem mínima do rastreio.js (vanilla JS, sem export) — só o que o app React chama.
export {};

declare global {
  interface Window {
    /** Dispara o evento Lead (Meta Pixel + GA4 + dataLayer) uma vez por sessão.
     * Chamar no exato momento em que o Brevo confirma sucesso — ver App.tsx. */
    rastreioLead?: (extras?: Record<string, unknown>) => boolean;
  }
}
