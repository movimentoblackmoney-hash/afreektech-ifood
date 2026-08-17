import svgPaths from "./svg-56h0h74598";
import imgFrame1 from "./1f651c7de98697fe8546e13e873e69e2d6012947.png";
import imgRectangle from "./b992ca58d168dcfbfec6a6d37c9ae1a1135af9fc.png";

function Group() {
  return (
    <div className="h-[14.997px] relative shrink-0 w-[117px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.9972" preserveAspectRatio="none" viewBox="0 0 117 14.9972" width="117">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p12c6a000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p16dfa000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1b160d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1bfe1ce0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p22e0e600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p3d061800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p3e805c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p3e699300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p3427b4f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p36963e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p11d90b80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 30 16" width="30">
        <g clipPath="url(#clip0_1_384)" id="Frame">
          <path d={svgPaths.p36a96900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14b97180} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_384">
            <rect fill="white" height="16" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Marcas() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Marcas">
      <Group />
      <div className="bg-[rgba(255,255,255,0.16)] h-[20px] relative shrink-0 w-px" data-name="Rectangle" />
      <div className="content-stretch flex items-start relative shrink-0" data-name="LP/Logo · iFood">
        <Frame />
      </div>
    </div>
  );
}

function Conteudo() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Marcas />
      <div className="bg-[#ea1d2c] content-stretch flex gap-[9px] items-center px-[18px] py-[9px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.13px]">Quero me inscrever</p>
      </div>
    </div>
  );
}

function Component01Navbar() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="01 · Navbar">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <Conteudo />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.09)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Selos() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0" data-name="Selos">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative rounded-[999px] shrink-0" data-name="LP/Selo de confiança">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c7cbd4] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          ✅
        </p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c7cbd4] text-[13px]">Certificado de conclusão</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative rounded-[999px] shrink-0" data-name="LP/Selo de confiança">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c7cbd4] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          📱
        </p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c7cbd4] text-[13px]">100% gratuito</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative rounded-[999px] shrink-0" data-name="LP/Selo de confiança">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c7cbd4] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          🎓
        </p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c7cbd4] text-[13px]">Feito pra quem começa do zero</p>
      </div>
    </div>
  );
}

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

function Conteudo1() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Selos />
      <div className="[word-break:break-word] font-['Bomstad_Display:ExtraBold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#e5e7eb] text-[62px] w-[min-content]">
        <p className="leading-[1.05] mb-0">Do Brasil inteiro pro</p>
        <p className="leading-[1.05] text-[#ea1d2c]">seu próprio negócio.</p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#c7cbd4] text-[24px] w-full max-w-[696px]">
        <span className="leading-[1.7]">{`Curso `}</span>
        <span className="font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.7]">gratuito</span>
        <span className="leading-[1.7]">{` para entregadores: em 6 meses você abre seu MEI, aprende IA na prática e coloca sua vitrine digital no ar. Sem custo. Com certificado. Tudo no celular.`}</span>
      </p>
      <div className="bg-[#ea1d2c] content-stretch flex gap-[9px] items-center px-[32px] py-[16px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white tracking-[0.15px]">QUERO ME INSCREVER GRÁTIS</p>
        <IconArrowRight />
      </div>
    </div>
  );
}

function Component02Hero() {
  return (
    <div className="relative shrink-0 w-full" data-name="02 · Hero">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[110px] relative size-full">
          <Conteudo1 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[99.87%] left-[0.05%] max-w-none object-cover top-[0.02%] w-[99.97%]" style={{ objectPosition: "right top" }} src={imgFrame1} />
        </div>
        <div className="absolute bg-gradient-to-b from-[20.286%] from-[rgba(0,0,0,0)] inset-0 to-black" />
      </div>
      <Component01Navbar />
      <Component02Hero />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Label">
      <div className="bg-[#ea1d2c] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ea1d2c] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        O QUE NINGUÉM TE CONTA
      </p>
    </div>
  );
}

function Corpo() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Corpo">
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.75] relative shrink-0 text-[#c7cbd4] text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Você conhece cada rua, cada atalho, cada cliente. Trabalha duro, cumpre a meta, entrega no prazo. Mas no fim do mês, a conta é sempre a mesma. E aquela vontade de ter algo seu continua ali, esperando. A verdade é simples: ninguém constrói o próprio futuro sem as ferramentas certas. E é exatamente isso que a gente veio te entregar.
      </p>
    </div>
  );
}

function Conteudo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip relative" data-name="Conteúdo">
      <Label />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[44px] w-full">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.12] mb-0">Todo dia você roda a cidade.</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif]">
          <span className="leading-[1.12]">{`Mas quem está `}</span>
          <span className="leading-[1.12] text-[#ea1d2c]">investindo em você?</span>
        </p>
      </div>
      <Corpo />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Conteudo2 />
      <div className="relative shrink-0 w-[clamp(240px,30vw,381px)] aspect-[381/390]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[127.56%] left-[-18.79%] max-w-none top-[-19.76%] w-[130.5%]" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Component03GanchoIdentificacao() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="03 · Gancho / Identificação">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#c8d44a] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c8d44a] text-[11px] tracking-[1.1px]">O CURSO</p>
    </div>
  );
}

function Titulo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-w-px overflow-clip relative" data-name="Título">
      <Label1 />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] min-w-full not-italic relative shrink-0 text-[#e5e7eb] text-[40px] w-[min-content]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Um curso feito pra transformar</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif]">
          <span className="leading-[1.15]">{`entregador em `}</span>
          <span className="leading-[1.15] text-[#c8d44a]">empreendedor.</span>
        </p>
      </div>
    </div>
  );
}

function Descricao() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Descrição">
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#9aa0ad] text-[17px] w-full">
        <span className="leading-[1.75]">{`O `}</span>
        <span className="font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.75]">Afreektech</span>
        <span className="leading-[1.75]">, em parceria com o iFood, criou um programa de formação pensado para quem trabalha com delivery e quer ir além do guidão. Conteúdos práticos para você aprender no ritmo que der, assíncrono, no celular, quando e onde quiser.</span>
      </p>
    </div>
  );
}

function Cabecalho() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Cabeçalho">
      <Titulo />
      <Descricao />
    </div>
  );
}

function Jornada() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Jornada">
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Jornada">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic px-[26px] py-[28px] relative size-full">
          <p className="font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] relative shrink-0 text-[#ea1d2c] text-[13px] tracking-[0.78px]">PASSO 01</p>
          <p className="font-['Bomstad_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#e5e7eb] text-[17px]">Abra seu MEI</p>
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Formalize seu negócio do zero e entre no jogo como pessoa jurídica.</p>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="LP/Card · Jornada">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic px-[26px] py-[28px] relative size-full">
          <p className="font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] relative shrink-0 text-[#ea1d2c] text-[13px] tracking-[0.78px]">PASSO 02</p>
          <p className="font-['Bomstad_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#e5e7eb] text-[17px]">Aprenda IA na prática</p>
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Use ferramentas simples que organizam, atendem clientes e aumentam sua produtividade.</p>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Jornada">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic px-[26px] py-[28px] relative size-full">
          <p className="font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] relative shrink-0 text-[#ea1d2c] text-[13px] tracking-[0.78px]">PASSO 03</p>
          <p className="font-['Bomstad_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#e5e7eb] text-[17px]">Vitrine digital no ar</p>
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Coloque seu negócio online, seja encontrado e comece a vender mais.</p>
        </div>
      </div>
    </div>
  );
}

function Conteudo3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Cabecalho />
      <Jornada />
    </div>
  );
}

function Component04ASolucao() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="04 · A Solução">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <Conteudo3 />
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#ea1d2c] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ea1d2c] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        O QUE VOCÊ APRENDE
      </p>
    </div>
  );
}

function Cabecalho1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center overflow-clip relative shrink-0 w-full" data-name="Cabeçalho">
      <Label2 />
      <p className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[44px] text-center">
        <span className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">{`5 habilidades que `}</span>
        <span className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] text-[#ea1d2c]">mudam o seu jogo</span>
      </p>
    </div>
  );
}

function Icone() {
  return (
    <div className="bg-[#ea1d2c] relative rounded-[12px] shrink-0 size-[52px]" data-name="Ícone">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          📊
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#ea1d2c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icone1() {
  return (
    <div className="bg-[#c8d44a] relative rounded-[12px] shrink-0 size-[52px]" data-name="Ícone">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          📄
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#c8d44a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icone2() {
  return (
    <div className="bg-[#ea1d2c] relative rounded-[12px] shrink-0 size-[52px]" data-name="Ícone">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          💳
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#ea1d2c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icone3() {
  return (
    <div className="bg-[#c8d44a] relative rounded-[12px] shrink-0 size-[52px]" data-name="Ícone">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          🤖
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#c8d44a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Icone4() {
  return (
    <div className="bg-[#ea1d2c] relative rounded-[12px] shrink-0 size-[52px]" data-name="Ícone">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          📱
        </p>
      </div>
      <div aria-hidden className="absolute border border-[#ea1d2c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function IconArrowRight1() {
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

function CardFechamento() {
  return (
    <div className="bg-[#ea1d2c] h-[291px] relative rounded-[12px] shrink-0 w-[328px]" data-name="Card · Fechamento">
      <div className="content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip px-[30px] py-[32px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] font-['Archivo:Black',sans-serif] font-black leading-[0] relative shrink-0 text-[#e5e7eb] text-[19px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[1.2] mb-0">Tudo isso.</p>
          <p className="leading-[1.2]">Sem pagar nada.</p>
        </div>
        <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.7] min-w-full relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
          5 pilares, um só objetivo: te dar as ferramentas para virar a chave.
        </p>
        <div className="bg-[#ea1d2c] content-stretch flex gap-[9px] items-center px-[22px] py-[12px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.13px]">COMEÇAR AGORA</p>
          <IconArrowRight1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#ea1d2c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function GridDePilares() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Grid de pilares">
      <div className="bg-[#1a1a20] content-stretch flex flex-col gap-[14px] h-[291px] items-start px-[30px] py-[32px] relative rounded-[12px] shrink-0 w-[328px]" data-name="LP/Card · Pilar">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Icone />
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">PILAR 01</p>
        <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">Precificação</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea1d2c] text-[13px]">Saiba quanto cobrar</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Aprenda a calcular o preço certo dos seus serviços e produtos. Chega de trabalhar no prejuízo sem perceber.</p>
      </div>
      <div className="bg-[#1a1a20] content-stretch flex flex-col gap-[14px] h-[291px] items-start px-[30px] py-[32px] relative rounded-[12px] shrink-0 w-[328px]" data-name="LP/Card · Pilar">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Icone1 />
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">PILAR 02</p>
        <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">MEI</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c8d44a] text-[13px]">Abra seu CNPJ</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Formalize seu negócio do zero. Saia do módulo com seu MEI aberto e entenda todos os benefícios de ser pessoa jurídica.</p>
      </div>
      <div className="bg-[#1a1a20] content-stretch flex flex-col gap-[14px] h-[291px] items-start px-[30px] py-[32px] relative rounded-[12px] shrink-0 w-[328px]" data-name="LP/Card · Pilar">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Icone2 />
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">PILAR 03</p>
        <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">Acesso a Crédito</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea1d2c] text-[13px]">Destrave oportunidades</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Entenda como pessoa jurídica acessa crédito com mais facilidade e melhores condições. Prepare-se pra crescer.</p>
      </div>
      <div className="bg-[#1a1a20] content-stretch flex flex-col gap-[14px] h-[291px] items-start px-[30px] py-[32px] relative rounded-[12px] shrink-0 w-[328px]" data-name="LP/Card · Pilar">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Icone3 />
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">PILAR 04</p>
        <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">IA na Prática</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c8d44a] text-[13px]">Use IA no dia a dia</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">IA não é bicho de 7 cabeças. Aprenda ferramentas simples que organizam, atendem clientes e aumentam sua produtividade.</p>
      </div>
      <div className="bg-[#1a1a20] content-stretch flex flex-col gap-[14px] h-[291px] items-start px-[30px] py-[32px] relative rounded-[12px] shrink-0 w-[328px]" data-name="LP/Card · Pilar">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Icone4 />
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">PILAR 05</p>
        <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">Vitrine Digital</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea1d2c] text-[13px]">Coloque seu negócio online</p>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Monte sua vitrine digital, seja encontrado e venda mais — sem precisar contratar técnico.</p>
      </div>
      <CardFechamento />
    </div>
  );
}

function Conteudo4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Cabecalho1 />
      <GridDePilares />
    </div>
  );
}

function Component05Os5Pilares() {
  return (
    <div className="bg-[#101014] relative shrink-0 w-full" data-name="05 · Os 5 Pilares">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <Conteudo4 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[rgba(200,212,74,0.5)] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c8d44a] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        POR QUE CONFIAR
      </p>
    </div>
  );
}

function Texto() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="Texto">
      <Label3 />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[40px]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Uma parceria que</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif]">
          <span className="leading-[1.15]">{`faz sentido `}</span>
          <span className="leading-[1.15] text-[#c8d44a]">pra você.</span>
        </p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#c7cbd4] text-[16px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[1.75]">{`O iFood é a maior plataforma de delivery do Brasil. O `}</span>
        <span className="font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.75]">Afreektech</span>
        <span className="leading-[1.75]">{` é uma escola de tecnologia focada em capacitar pessoas com habilidades digitais reais.  Juntos, criamos um caminho para que quem move o país também construa o próprio negócio.`}</span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[13.6px] relative shrink-0 w-[25.5px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.6" preserveAspectRatio="none" viewBox="0 0 25.5 13.6" width="25.5">
        <g clipPath="url(#clip0_1_391)" id="Frame">
          <path d={svgPaths.p1c01a080} fill="var(--fill-0, #EA1D2C)" id="Vector" />
          <path d={svgPaths.p2f3b1d00} fill="var(--fill-0, #EA1D2C)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_391">
            <rect fill="white" height="13.6" width="25.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Marca() {
  return (
    <div className="bg-[rgba(234,29,44,0.12)] relative rounded-[8px] shrink-0 size-[56px]" data-name="Marca">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-start relative shrink-0" data-name="LP/Logo · iFood">
          <Frame3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(234,29,44,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Texto1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-name="Texto">
      <p className="font-['Archivo:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        iFood
      </p>
      <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">A maior plataforma de delivery do Brasil, ao lado de quem faz a entrega acontecer.</p>
    </div>
  );
}

function CardMarca() {
  return (
    <div className="bg-[#101014] relative rounded-[12px] shrink-0 w-full" data-name="Card · Marca">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[18px] items-start px-[30px] py-[28px] relative size-full">
          <Marca />
          <Texto1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function MarcaAfreektech() {
  return (
    <div className="h-[22px] relative shrink-0 w-[26px]" data-name="Marca Afreektech">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 26 22" width="26">
        <g id="Marca Afreektech">
          <path clipRule="evenodd" d={svgPaths.p19dc1800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Marca1() {
  return (
    <div className="bg-[rgba(200,212,74,0.12)] relative rounded-[8px] shrink-0 size-[56px]" data-name="Marca">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <MarcaAfreektech />
      </div>
      <div aria-hidden className="absolute border border-[rgba(200,212,74,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Texto2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px overflow-clip relative" data-name="Texto">
      <p className="font-['Archivo:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Afreektech
      </p>
      <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">Escola de tecnologia que capacita pessoas com habilidades digitais reais.</p>
    </div>
  );
}

function CardMarca1() {
  return (
    <div className="bg-[#101014] relative rounded-[12px] shrink-0 w-full" data-name="Card · Marca">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[18px] items-start px-[30px] py-[28px] relative size-full">
          <Marca1 />
          <Texto2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Marcas1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-name="Marcas">
      <CardMarca />
      <CardMarca1 />
    </div>
  );
}

function Colunas() {
  return (
    <div className="content-stretch flex gap-[56px] items-center overflow-clip relative shrink-0 w-full" data-name="Colunas">
      <Texto />
      <Marcas1 />
    </div>
  );
}

function Reforco() {
  return (
    <div className="content-stretch flex gap-[14px] min-h-[169px] items-start overflow-clip relative shrink-0 w-full" data-name="Reforço">
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Reforço">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col items-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center px-[24px] py-[26px] relative size-full">
            <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              🤝
            </p>
            <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#e5e7eb] text-[15px] text-center w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Custeado pela parceria
            </p>
            <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] text-center w-[min-content]">O investimento é da parceria iFood × Afreektech. Pra você, do começo ao fim, é gratuito.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Reforço">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col items-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center px-[24px] py-[26px] relative size-full">
            <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              🎓
            </p>
            <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#e5e7eb] text-[15px] text-center w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Habilidade que abre portas
            </p>
            <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] text-center w-[min-content]">Conteúdo prático e certificado de conclusão — competências que o mercado reconhece e paga.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Reforço">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col items-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center px-[24px] py-[26px] relative size-full">
            <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[26px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              📱
            </p>
            <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#e5e7eb] text-[15px] text-center w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Pensado pra sua rotina
            </p>
            <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] text-center w-[min-content]">Tudo no celular, no seu tempo. Feito pra caber na vida de quem está na rua todo dia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Conteudo5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Colunas />
      <Reforco />
    </div>
  );
}

function Component06Credibilidade() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="06 · Credibilidade">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <Conteudo5 />
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[rgba(234,29,44,0.5)] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ea1d2c] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        SEM LETRA MIÚDA
      </p>
    </div>
  );
}

function Cabecalho2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center overflow-clip relative shrink-0 w-full" data-name="Cabeçalho">
      <Label4 />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[44px] text-center">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.18] mb-0">{`"De graça? Deve ter pegadinha."`}</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.18] text-[#ea1d2c]">Não tem.</p>
      </div>
    </div>
  );
}

function Linha1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ❓
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">É mesmo de graça?</p>
    </div>
  );
}

function Linha2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✅
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">Sim. 100% gratuito. Sem taxa de matrícula, sem mensalidade, sem pagamento no final. Custeado pela parceria iFood × Afreektech.</p>
    </div>
  );
}

function Linha3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ❓
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Preciso de computador?</p>
    </div>
  );
}

function Linha4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✅
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">Não. É tudo no celular, do começo ao fim.</p>
    </div>
  );
}

function Linha() {
  return (
    <div className="content-stretch flex gap-[14px] min-h-[129px] items-start overflow-clip relative shrink-0 w-full" data-name="Linha">
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Objeção (FAQ)">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start px-[28px] py-[26px] relative size-full">
          <Linha1 />
          <Linha2 />
        </div>
      </div>
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Objeção (FAQ)">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start px-[28px] py-[26px] relative size-full">
          <Linha3 />
          <Linha4 />
        </div>
      </div>
    </div>
  );
}

function Linha6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ❓
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Tem certificado de verdade?</p>
    </div>
  );
}

function Linha7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✅
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">Sim. Certificado de conclusão para usar ao abrir MEI, acessar crédito e mostrar para clientes.</p>
    </div>
  );
}

function Linha8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ❓
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Preciso já saber de tecnologia?</p>
    </div>
  );
}

function Linha9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✅
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">Não. O conteúdo foi feito para quem está começando do zero.</p>
    </div>
  );
}

function Linha5() {
  return (
    <div className="content-stretch flex gap-[14px] min-h-[129px] items-start overflow-clip relative shrink-0 w-full" data-name="Linha">
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Objeção (FAQ)">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start px-[28px] py-[26px] relative size-full">
          <Linha6 />
          <Linha7 />
        </div>
      </div>
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Objeção (FAQ)">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start px-[28px] py-[26px] relative size-full">
          <Linha8 />
          <Linha9 />
        </div>
      </div>
    </div>
  );
}

function Linha11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ❓
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Consigo fazer trabalhando como entregador ativo?</p>
    </div>
  );
}

function Linha12() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✅
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">Sim. O conteúdo é assíncrono — você acessa no seu tempo, sem atrapalhar suas entregas.</p>
    </div>
  );
}

function Linha13() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ❓
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Quanto tempo por dia eu preciso dedicar?</p>
    </div>
  );
}

function Linha14() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        ✅
      </p>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">No seu tempo, no seu ritmo.</p>
    </div>
  );
}

function Linha10() {
  return (
    <div className="content-stretch flex gap-[14px] min-h-[129px] items-start overflow-clip relative shrink-0 w-full" data-name="Linha">
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Objeção (FAQ)">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start px-[28px] py-[26px] relative size-full">
          <Linha11 />
          <Linha12 />
        </div>
      </div>
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Objeção (FAQ)">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start px-[28px] py-[26px] relative size-full">
          <Linha13 />
          <Linha14 />
        </div>
      </div>
    </div>
  );
}

function GridDeObjecoes() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Grid de objeções">
      <Linha />
      <Linha5 />
      <Linha10 />
    </div>
  );
}

function Conteudo6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Cabecalho2 />
      <GridDeObjecoes />
    </div>
  );
}

function Component07QuebraDeObjecoes() {
  return (
    <div className="bg-[#101014] relative shrink-0 w-full" data-name="07 · Quebra de Objeções">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <Conteudo6 />
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[rgba(234,29,44,0.5)] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ea1d2c] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        PASSO A PASSO
      </p>
    </div>
  );
}

function Cabecalho3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center overflow-clip relative shrink-0 w-full" data-name="Cabeçalho">
      <Label5 />
      <p className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[44px] text-center">
        <span className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">{`Simples `}</span>
        <span className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] text-[#ea1d2c]">assim:</span>
      </p>
    </div>
  );
}

function Passos() {
  return (
    <div className="content-stretch flex gap-[14px] min-h-[178px] items-start overflow-clip relative shrink-0 w-full" data-name="Passos">
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Passo">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic px-[26px] py-[30px] relative size-full">
          <p className="font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] relative shrink-0 text-[#ea1d2c] text-[40px]">1</p>
          <p className="font-['Bomstad_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]">Você se inscreve</p>
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">Gratuitamente, aqui mesmo, em 2 minutos.</p>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Passo">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic px-[26px] py-[30px] relative size-full">
          <p className="font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] relative shrink-0 text-[#ea1d2c] text-[40px]">2</p>
          <p className="font-['Bomstad_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]">Você acessa o conteúdo</p>
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">Pelo celular, no seu ritmo.</p>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Passo">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic px-[26px] py-[30px] relative size-full">
          <p className="font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] relative shrink-0 text-[#ea1d2c] text-[40px]">3</p>
          <p className="font-['Bomstad_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]">Você aprende na prática</p>
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">5 módulos, aplicáveis desde o primeiro dia.</p>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Passo">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic px-[26px] py-[30px] relative size-full">
          <p className="font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] relative shrink-0 text-[#ea1d2c] text-[40px]">4</p>
          <p className="font-['Bomstad_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]">Você recebe seu certificado</p>
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">E sai com MEI, IA e vitrine digital no bolso.</p>
        </div>
      </div>
    </div>
  );
}

function Conteudo7() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Cabecalho3 />
      <Passos />
    </div>
  );
}

function Component09ComoFunciona() {
  return (
    <div className="bg-[#101014] relative shrink-0 w-full" data-name="09 · Como Funciona">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[96px] relative size-full">
          <Conteudo7 />
        </div>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[rgba(234,29,44,0.5)] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ea1d2c] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        INSCRIÇÕES ABERTAS
      </p>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Item">
      <div className="relative shrink-0 size-[22px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
          <g id="Ellipse">
            <circle cx="11" cy="11" fill="var(--fill-0, #EA1D2C)" fillOpacity="0.14" r="11" />
            <circle cx="11" cy="11" r="10.5" stroke="var(--stroke-0, #EA1D2C)" strokeOpacity="0.3" />
            <path d="M6.4 11.3L9.4 14.3L15.6 7.8" stroke="var(--stroke-0, #EA1D2C)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c7cbd4] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        100% gratuito, sem mensalidade
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Item">
      <div className="relative shrink-0 size-[22px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
          <g id="Ellipse">
            <circle cx="11" cy="11" fill="var(--fill-0, #EA1D2C)" fillOpacity="0.14" r="11" />
            <circle cx="11" cy="11" r="10.5" stroke="var(--stroke-0, #EA1D2C)" strokeOpacity="0.3" />
            <path d="M6.4 11.3L9.4 14.3L15.6 7.8" stroke="var(--stroke-0, #EA1D2C)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c7cbd4] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        No seu tempo, 100% no celular
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Item">
      <div className="relative shrink-0 size-[22px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
          <g id="Ellipse">
            <circle cx="11" cy="11" fill="var(--fill-0, #EA1D2C)" fillOpacity="0.14" r="11" />
            <circle cx="11" cy="11" r="10.5" stroke="var(--stroke-0, #EA1D2C)" strokeOpacity="0.3" />
            <path d="M6.4 11.3L9.4 14.3L15.6 7.8" stroke="var(--stroke-0, #EA1D2C)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c7cbd4] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Certificado de conclusão
      </p>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Item">
      <div className="relative shrink-0 size-[22px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
          <g id="Ellipse">
            <circle cx="11" cy="11" fill="var(--fill-0, #EA1D2C)" fillOpacity="0.14" r="11" />
            <circle cx="11" cy="11" r="10.5" stroke="var(--stroke-0, #EA1D2C)" strokeOpacity="0.3" />
            <path d="M6.4 11.3L9.4 14.3L15.6 7.8" stroke="var(--stroke-0, #EA1D2C)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c7cbd4] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Feito pra quem começa do zero
      </p>
    </div>
  );
}

function Beneficios() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0" data-name="Benefícios">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Texto3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip relative" data-name="Texto">
      <Label6 />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[40px]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Sua próxima entrega</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif]">
          <span className="leading-[1.15]">{`pode ser o `}</span>
          <span className="leading-[1.15] text-[#ea1d2c]">seu futuro.</span>
        </p>
      </div>
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#c7cbd4] text-[17px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Não deixa pra depois o que pode começar agora. As inscrições estão abertas e são gratuitas.
      </p>
      <Beneficios />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[13px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[14px]">Seu nome</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[13px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[14px]">seu@email.com</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[13px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[14px]">(00) 00000-0000</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[13px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[14px]">Sua cidade</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Linha15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Linha">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="LP/Campo de formulário">
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[12px] tracking-[0.6px]">TELEFONE</p>
        <Input2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="LP/Campo de formulário">
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[12px] tracking-[0.6px]">CIDADE</p>
        <Input3 />
      </div>
    </div>
  );
}

function FilledPortion() {
  return <div className="bg-[#ea1d2c] h-full relative shrink-0 w-[70%]" data-name="Filled Portion" />;
}

function Track() {
  return (
    <div className="bg-[#ea1d2c] content-stretch flex h-[4px] items-start overflow-clip relative rounded-[2px] shrink-0 w-full" data-name="Track">
      <FilledPortion />
    </div>
  );
}

function Thumb() {
  return <div className="absolute bg-[#ea1d2c] left-[320px] rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] size-[16px] top-[-6px]" data-name="Thumb" />;
}

function Ticks() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Fivo_Sans_Modern:Regular',sans-serif] items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[12px] w-full" data-name="Ticks">
      <p className="relative shrink-0">Não sou</p>
      <p className="relative shrink-0">6 meses</p>
      <p className="relative shrink-0">1 ano</p>
      <p className="relative shrink-0">2 anos</p>
      <p className="relative shrink-0">5 anos</p>
      <p className="relative shrink-0">10+ anos</p>
    </div>
  );
}

function SliderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Slider Container">
      <Track />
      <Thumb />
      <Ticks />
    </div>
  );
}

function SliderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Slider Section">
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[12px] tracking-[0.6px]">HÁ QUANTO TEMPO VOCÊ É ENTREGADOR?</p>
      <SliderContainer />
    </div>
  );
}

function IconArrowRight2() {
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

function CardFormulario() {
  return (
    <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Card · Formulário">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[40px] py-[42px] relative size-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="LP/Campo de formulário">
            <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[12px] tracking-[0.6px]">NOME</p>
            <Input />
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="LP/Campo de formulário">
            <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[12px] tracking-[0.6px]">E-MAIL</p>
            <Input1 />
          </div>
          <Linha15 />
          <SliderSection />
          <div className="bg-[#ea1d2c] relative rounded-[8px] shrink-0 w-full" data-name="LP/Botão · Primário">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[9px] items-center justify-center px-[32px] py-[16px] relative size-full">
                <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white tracking-[0.15px]">GARANTIR MINHA VAGA GRÁTIS</p>
                <IconArrowRight2 />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b616f] text-[12px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
            Sem custo · Com certificado · No celular
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Colunas1() {
  return (
    <div className="content-stretch flex gap-[64px] items-start overflow-clip relative shrink-0 w-full" data-name="Colunas">
      <Texto3 />
      <CardFormulario />
    </div>
  );
}

function Conteudo8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Colunas1 />
    </div>
  );
}

function Component10InscricaoCtaFinal() {
  return (
    <div className="bg-[#101014] relative shrink-0 w-full" data-name="10 · Inscrição / CTA Final">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[96px] relative size-full">
          <Conteudo8 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.09)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function MarcaAfreektech1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]" data-name="Marca Afreektech">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 24 20" width="24">
        <g id="Marca Afreektech" opacity="0.6">
          <path d={svgPaths.p172db580} fill="var(--fill-0, #C8D44A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Marca2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Marca">
      <MarcaAfreektech1 />
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b616f] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        © 2026 Afreektech × iFood. Curso gratuito de formação para entregadores.
      </p>
    </div>
  );
}

function Links() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Archivo:Medium',sans-serif] font-medium gap-[24px] items-center leading-[normal] overflow-clip relative shrink-0 text-[#5b616f] text-[12px]" data-name="Links">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Inscreva-se
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        O que você aprende
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Política de Privacidade
      </p>
    </div>
  );
}

function Conteudo9() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <Marca2 />
      <Links />
    </div>
  );
}

function Component11Rodape() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="11 · Rodapé">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[48px] relative size-full">
          <Conteudo9 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.09)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

export default function LpWeb() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="LP - Web / 1440">
      <Frame1 />
      <Component03GanchoIdentificacao />
      <Component04ASolucao />
      <Component05Os5Pilares />
      <Component06Credibilidade />
      <Component07QuebraDeObjecoes />
      <Component09ComoFunciona />
      <Component10InscricaoCtaFinal />
      <Component11Rodape />
    </div>
  );
}