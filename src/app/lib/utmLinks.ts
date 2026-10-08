// Mantém a origem da campanha nos links de convite da plataforma (cursos.afreektech.com.br/convite/...):
// usa as UTMs da URL atual ou, se a pessoa voltou depois, a origem que o rastreio.js guardou (last-touch,
// 90 dias). Nunca sobrescreve uma UTM que o link já tenha. Mesma regra do `comUtms` da LP do Rio.
const CHAVES = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function comUtms(
  url: string,
  search: string = typeof window !== "undefined" ? window.location.search : "",
  guardada: Record<string, string> = origemGuardada()
): string {
  try {
    const u = new URL(url);
    const atual = new URLSearchParams(search);
    for (const k of CHAVES) {
      const v = atual.get(k) || guardada[k];
      if (v && !u.searchParams.has(k)) u.searchParams.set(k, v);
    }
    return u.toString();
  } catch {
    return url; // "#", vazio ou URL inválida: devolve como veio
  }
}

function origemGuardada(): Record<string, string> {
  try {
    return (typeof window !== "undefined" && window.__rastreioOrigem?.().efetiva) || {};
  } catch {
    return {}; // o rastreio nunca pode quebrar a página
  }
}
