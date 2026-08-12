// Captura UTM da URL, no mesmo formato/espírito do qzGetUtms() do projeto afreektechJourey.

export type Utms = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
};

export function getUtms(): Utms {
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") || "ifood-parceiro",
    utm_medium: p.get("utm_medium") || "link-direto",
    utm_campaign: p.get("utm_campaign") || "banco-talentos-ifood-2026",
  };
}
