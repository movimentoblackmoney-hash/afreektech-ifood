// Captura UTM da URL, no mesmo formato/espírito do qzGetUtms() do projeto afreektechJourey.
// Sem UTM na URL atual (recarregou, voltou depois), usa a origem que o rastreio.js guardou
// (last-touch, 90 dias) antes de cair nos defaults do iFood.

export type Utms = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
};

export function getUtms(): Utms {
  const p = new URLSearchParams(window.location.search);
  let guardada: Record<string, string> = {};
  try {
    guardada = window.__rastreioOrigem?.().efetiva ?? {};
  } catch {
    /* rastreio nunca pode quebrar o formulário */
  }
  return {
    utm_source: p.get("utm_source") || guardada.utm_source || "ifood-parceiro",
    utm_medium: p.get("utm_medium") || guardada.utm_medium || "link-direto",
    utm_campaign: p.get("utm_campaign") || guardada.utm_campaign || "banco-talentos-ifood-2026",
    utm_content: p.get("utm_content") || guardada.utm_content || "nenhum",
  };
}
