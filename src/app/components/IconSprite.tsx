// Sprite único com os 13 ícones usados na LP (substitui os emojis antigos). Path data
// verbatim do doc de referência "LP-Otimizacao-Copy-e-Icones.md" (traço 1.75px, sem
// preenchimento, currentColor, canvas 24x24). Renderizado uma única vez em App.tsx —
// nunca dentro de LpWeb/LpMobile, já que só uma das duas árvores fica montada por vez.
// Uso: <svg className="size-[Npx] text-[#hex]" fill="none" stroke="currentColor"
//   strokeWidth="1.75" viewBox="0 0 24 24"><use href="#i-nome" /></svg>
export default function IconSprite() {
  return (
    <svg style={{ display: "none" }} aria-hidden focusable="false">
      <symbol id="i-parceria" viewBox="0 0 24 24">
        <path d="M3 8h6a2 2 0 0 1 2 2v6H5a2 2 0 0 1-2-2V8Z" />
        <path d="M21 16h-6a2 2 0 0 1-2-2V8h6a2 2 0 0 1 2 2v6Z" />
      </symbol>
      <symbol id="i-selo" viewBox="0 0 24 24">
        <circle cx="12" cy="9" r="5.5" />
        <path d="M8.5 13.5 7 22l5-2.5L17 22l-1.5-8.5" />
      </symbol>
      <symbol id="i-celular" viewBox="0 0 24 24">
        <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
        <path d="M10.5 18.5h3" />
      </symbol>
      <symbol id="i-pergunta" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9.2" />
        <path d="M9.6 9.2a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .9-1 1.6v.4" />
        <path d="M12 17.1v.01" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9.2" />
        <path d="m8 12.3 2.7 2.7L16 9.6" />
      </symbol>
      <symbol id="i-cnpj" viewBox="0 0 24 24">
        <rect x="3" y="4.5" width="18" height="15" rx="2" />
        <path d="M7 9.5h5M7 13h8M7 16h4" />
      </symbol>
      <symbol id="i-vitrine" viewBox="0 0 24 24">
        <path d="M3.5 8.5h17V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V8.5Z" />
        <path d="M3.5 8.5 5.6 4h12.8l2.1 4.5M8.5 20.5v-6h4v6" />
      </symbol>
      <symbol id="i-ia" viewBox="0 0 24 24">
        <rect x="8" y="8" width="8" height="8" rx="1.6" />
        <path d="M10 8V4.8M14 8V4.8M10 19.2V16M14 19.2V16M8 10H4.8M8 14H4.8M19.2 10H16M19.2 14H16" />
      </symbol>
      <symbol id="i-preco" viewBox="0 0 24 24">
        <rect x="5" y="2.8" width="14" height="18.4" rx="2" />
        <path d="M8.5 7h7M9 11.5h.01M12 11.5h.01M15 11.5h.01M9 15h.01M12 15h.01M15 15v3" />
      </symbol>
      <symbol id="i-horizonte" viewBox="0 0 24 24">
        <path d="M2.5 16.5h19M6 16.5 12 6l6 10.5" />
        <circle cx="12" cy="3.6" r="1.6" />
      </symbol>
      <symbol id="i-negocio" viewBox="0 0 24 24">
        <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
        <path d="M9 7.5V5.6A1.6 1.6 0 0 1 10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v1.9M3 12.5h18" />
      </symbol>
      <symbol id="i-carreira" viewBox="0 0 24 24">
        <path d="M3.5 8.5h13l-3-3M20.5 15.5h-13l3 3" />
      </symbol>
      <symbol id="i-seta" viewBox="0 0 24 24">
        <path d="M4 12h15M13 6l6 6-6 6" />
      </symbol>
    </svg>
  );
}
