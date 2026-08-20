import svgPaths from "./svg-2sz7jct5y5";

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

export default function CardFormulario() {
  return (
    <div className="bg-[#1a1a20] relative rounded-[16px] size-full" data-name="Card · Formulário">
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip px-[40px] py-[42px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Bomstad_Display:ExtraBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[40px] text-center w-full">
          <span className="leading-[1.15]">{`Sua inscrição foi recebida com `}</span>
          <span className="leading-[1.15] text-[#ea1d2c]">sucesso.</span>
        </p>
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[20px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          Em breve você receberá via email o seu cadastro para a plataforma. Enquanto isso aproveite e conheça quem faz parte desse corre com você
        </p>
        <div className="bg-[#ea1d2c] relative rounded-[8px] shrink-0 w-full" data-name="LP/Botão · Primário">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[9px] items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white tracking-[0.15px] whitespace-nowrap">Entrar na comunidade</p>
              <IconArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}