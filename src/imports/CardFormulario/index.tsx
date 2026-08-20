import svgPaths from "./svg-2sz7jct5y5";

const MEMBERS_URL = "https://afreektech.themembers.com.br/login";

function IconArrowRight() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="icon/arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="icon/arrow-right">
          <path d={svgPaths.pa112780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Tarja() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#ea1d2c] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ea1d2c] text-[11px] tracking-[1.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        FALTA UM PASSO
      </p>
    </div>
  );
}

export default function CardFormulario() {
  return (
    <div className="bg-[#1a1a20] relative rounded-[16px] size-full" data-name="Card · Formulário">
      <div className="content-stretch flex flex-col gap-[20px] items-center justify-center overflow-clip px-[40px] py-[42px] relative rounded-[inherit] size-full">
        <Tarja />
        <p className="[word-break:break-word] font-['Bomstad_Display:ExtraBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[36px] text-center w-full">
          <span className="leading-[1.15]">Recebemos seu cadastro. </span>
          <span className="leading-[1.15] text-[#ea1d2c]">Agora crie seu acesso.</span>
        </p>
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#c7cbd4] text-[17px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          A área do aluno é onde as aulas ficam. Criar seu acesso leva menos de um minuto e é isso que destrava o conteúdo. Você também recebe o link por e-mail, mas fazendo agora já entra direto.
        </p>
        <a
          href={MEMBERS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ea1d2c] relative rounded-[8px] shrink-0 w-full hover:opacity-90 transition-opacity"
          data-name="LP/Botão · Primário"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[9px] items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white tracking-[0.15px] whitespace-nowrap">CRIAR MEU ACESSO</p>
              <IconArrowRight />
            </div>
          </div>
        </a>
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b616f] text-[13px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Use o mesmo e-mail que você acabou de cadastrar.
        </p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}