import svgPaths from "./svg-56h0h74598";
import imgFrame1 from "./1f651c7de98697fe8546e13e873e69e2d6012947.png";
import imgRectangle from "./b992ca58d168dcfbfec6a6d37c9ae1a1135af9fc.png";
import imgInovahack from "./inovahack.jpg";
import imgLogoChegaJuntoIfood from "./logo-chega-junto-ifood-branco.png";

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
  // Logo "Chega Junto · iFood" (substituiu o wordmark simples do iFood a pedido do time,
  // 2026-08-27). É um PNG com 3 linhas de texto empilhadas ("FUNDO iFOOD" + "chega junto" +
  // "iFood") — bem mais detalhado que o SVG de 2 paths anterior, por isso ganhou mais altura
  // pra continuar legível dentro da navbar de 44px. Arquivo trocado por versão nova do time
  // em 2026-08-28; o time achou a versão anterior pequena, então também aumentei o box de
  // 36x68 pra 44x52 (altura = altura total da linha da navbar), casando melhor com a
  // proporção real do PNG (mais "quadrado" que o antigo, ~1.17:1) pra preencher mais espaço.
  return (
    <div className="h-[44px] relative shrink-0 w-[52px]" data-name="Frame">
      <img alt="Chega Junto · iFood" className="absolute block inset-0 size-full object-contain" src={imgLogoChegaJuntoIfood} />
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
    <div className="content-stretch flex flex-wrap gap-[12px] items-start overflow-clip relative shrink-0" data-name="Selos">
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative rounded-[999px] shrink-0" data-name="LP/Selo de confiança">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <svg className="size-[16px] shrink-0 text-[#c7cbd4]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <use href="#i-selo" />
        </svg>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c7cbd4] text-[13px]">Certificado de conclusão</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative rounded-[999px] shrink-0" data-name="LP/Selo de confiança">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <svg className="size-[16px] shrink-0 text-[#c7cbd4]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <use href="#i-check" />
        </svg>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c7cbd4] text-[13px]">100% gratuito</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative rounded-[999px] shrink-0" data-name="LP/Selo de confiança">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <svg className="size-[16px] shrink-0 text-[#c7cbd4]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <use href="#i-horizonte" />
        </svg>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c7cbd4] text-[13px]">Feito pra quem começa do zero</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[9px] relative rounded-[999px] shrink-0" data-name="LP/Selo de confiança">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <svg className="size-[16px] shrink-0 text-[#c7cbd4]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <use href="#i-celular" />
        </svg>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c7cbd4] text-[13px]">Tudo no celular</p>
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
      <div className="[word-break:break-word] font-['Bomstad_Display:ExtraBold',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#e5e7eb] text-[52px] w-[min-content]">
        <p className="leading-[1.1] mb-0">Você já bate a meta do dia.</p>
        <p className="leading-[1.1] text-[#ea1d2c]">Agora, alcance a meta da sua vida.</p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#c7cbd4] text-[20px] w-full max-w-[696px]">
        Fechar o número do app é rotina. Você faz isso desde sempre, só que essa meta zera toda meia-noite e começa de novo no dia seguinte. A meta de vida é outra: essa não zera. É a casa melhor, o filho estudando, o negócio no seu nome. De graça, no celular, no seu ritmo.
      </p>
      <div className="bg-[#ea1d2c] content-stretch flex gap-[9px] items-center px-[32px] py-[16px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white tracking-[0.15px]">QUERO COMEÇAR AGORA</p>
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

// ─── Proposta (nova, id=proposta) ─────────────────────────────────────────────

function LabelProposta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#c8d44a] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c8d44a] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        AONDE VOCÊ CHEGA
      </p>
    </div>
  );
}

function CabecalhoProposta() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Cabeçalho">
      <LabelProposta />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[40px]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Daqui a um ano,</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">essa história é outra.</p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#9aa0ad] text-[17px] w-full max-w-[720px]">
        Hoje você entrega. Amanhã você atende no seu nome, cobra o seu preço e tem cliente que te procura. O curso não te devolve na mesma esquina. Ele te mostra a saída e caminha com você até ela.
      </p>
    </div>
  );
}

function GridProposta() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Grid">
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Proposta">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[14px] items-start px-[30px] py-[32px] relative size-full">
          <svg className="size-[32px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-cnpj" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">Seu nome numa empresa</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">A gente te leva pelo caminho do MEI, passo a passo, até você virar pessoa jurídica e parar de depender só do app.</p>
        </div>
      </div>
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Proposta">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[14px] items-start px-[30px] py-[32px] relative size-full">
          <svg className="size-[32px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-vitrine" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">Um lugar pra te achar</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Sua vitrine digital no ar: quem procura te encontra sozinho, sem depender de indicação nem de sorte.</p>
        </div>
      </div>
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Proposta">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[14px] items-start px-[30px] py-[32px] relative size-full">
          <svg className="size-[32px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-selo" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">Um papel que abre porta</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Certificado de conclusão. Aquele comprovante que sempre te faltou na hora de pedir crédito ou fechar com um cliente maior.</p>
        </div>
      </div>
    </div>
  );
}

function ConteudoProposta() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <CabecalhoProposta />
      <GridProposta />
    </div>
  );
}

function ComponentProposta() {
  return (
    <div id="proposta" className="bg-black relative shrink-0 w-full" data-name="Proposta · Aonde você chega">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <ConteudoProposta />
        </div>
      </div>
    </div>
  );
}

// ─── Prova (nova, id=prova) ────────────────────────────────────────────────────

function LabelProva() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#c8d44a] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c8d44a] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        NÃO É PROMESSA
      </p>
    </div>
  );
}

function CabecalhoProva() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Cabeçalho">
      <LabelProva />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[40px]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Muita gente já saiu</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">da estaca zero por aqui.</p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#9aa0ad] text-[17px] w-full max-w-[720px]">
        O Afreektech não nasceu ontem nem começa com você. Desde 2017 a gente vem tirando gente da estaca zero, e quase todo mundo chegou aqui igual: sem tempo sobrando e sem saber por onde começar.
      </p>
    </div>
  );
}

function GridProva() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Grid">
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Prova">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[30px] py-[32px] relative size-full">
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea1d2c] text-[40px]">+50 mil</p>
          <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>pessoas impactadas</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">É o alcance somado de todas as nossas frentes de educação e oportunidade desde 2017, entre plataforma, InovaHack, mentorias e projetos no território.</p>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Prova">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[30px] py-[32px] relative size-full">
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea1d2c] text-[40px]">+18 mil</p>
          <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>alunos na plataforma</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Gente que entrou sem saber nada de tecnologia e hoje estuda com a gente. O método já rodou, já foi testado e já deu certo antes de chegar até você.</p>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Prova">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[30px] py-[32px] relative size-full">
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea1d2c] text-[40px]">R$ 2 mi</p>
          <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>em bolsas e capital semente</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Já distribuídos em premiações e investimento para projetos saírem do papel. Aqui a conversa sobre dinheiro não para no discurso.</p>
        </div>
      </div>
    </div>
  );
}

function ConteudoProva() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <CabecalhoProva />
      <GridProva />
    </div>
  );
}

function ComponentProva() {
  return (
    <div id="prova" className="bg-[#101014] relative shrink-0 w-full" data-name="Prova · Não é promessa">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <ConteudoProva />
        </div>
      </div>
    </div>
  );
}

// ─── Recompensa (novo, id=recompensa) — bônus "Calculadora da Meta Real" oferecido logo
// após a inscrição. O mockup animado da calculadora usa classes CSS puras (não Tailwind),
// portadas do HTML de referência do time pra src/styles/calc-demo.css (keyframes de fade-in
// escalonado por linha, glow pulsante) — replicar isso só com utilitários Tailwind seria
// bem mais verboso que a folha de estilo dedicada.

function LabelRecompensa() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#c8d44a] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c8d44a] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        O QUE VEM JUNTO
      </p>
    </div>
  );
}

function BeneficiosRecompensa() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <svg className="size-[22px] shrink-0 text-[#c8d44a]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <use href="#i-preco" />
        </svg>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#c7cbd4] text-[16px] flex-[1_0_0]">
          <span className="font-['Fivo_Sans_Modern:Bold',sans-serif] text-[#e5e7eb]">Quanto sobra mesmo:</span> a conta real do seu dia, não só o número bruto.
        </p>
      </div>
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <svg className="size-[22px] shrink-0 text-[#c8d44a]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <use href="#i-ia" />
        </svg>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#c7cbd4] text-[16px] flex-[1_0_0]">
          <span className="font-['Fivo_Sans_Modern:Bold',sans-serif] text-[#e5e7eb]">Um comando de IA pronto:</span> é só jogar no seu assistente de inteligência artificial e já começar a faturar mais ainda hoje.
        </p>
      </div>
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
        <svg className="size-[22px] shrink-0 text-[#c8d44a]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <use href="#i-check" />
        </svg>
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#c7cbd4] text-[16px] flex-[1_0_0]">
          <span className="font-['Fivo_Sans_Modern:Bold',sans-serif] text-[#e5e7eb]">Chega no seu e-mail:</span> junto com o acesso às aulas, pra usar sempre que precisar.
        </p>
      </div>
    </div>
  );
}

function IconArrowRightRecompensa() {
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

function TextoRecompensa() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip relative">
      <LabelRecompensa />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[40px]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Você entra e já sai</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">com uma ferramenta na mão.</p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#9aa0ad] text-[17px] w-full max-w-[520px]">
        Ao confirmar a inscrição, você recebe a Calculadora da Meta Real. Você diz quanto quer levar pra casa, onde roda e quanto gasta, e ela mostra na hora quanto a sua meta vale de verdade, depois da gasolina.
      </p>
      <BeneficiosRecompensa />
      <div className="bg-[#ea1d2c] content-stretch flex gap-[9px] items-center px-[32px] py-[16px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white tracking-[0.15px]">QUERO CALCULAR MINHA META REAL</p>
        <IconArrowRightRecompensa />
      </div>
    </div>
  );
}

function CalcDemo() {
  return (
    <div className="calc-demo w-full max-w-[360px]" aria-hidden="true">
      <div className="calc-demo-glow" />
      <div className="calc-screen">
        <div className="calc-top"><span className="d" /><span className="t">Calculadora da Meta Real</span></div>
        <div className="calc-row r1"><span className="l">Levar pra casa</span><span className="v">R$ 120</span></div>
        <div className="calc-row r2"><span className="l">Onde você roda</span><span className="v">Guarulhos, SP</span></div>
        <div className="calc-row r3"><span className="l">Horas · gasto</span><span className="v">8h · R$ 40</span></div>
        <div className="calc-res">
          <span className="k">Sua meta real</span>
          <div className="n">R$ 160 <b>no bruto</b></div>
          <span className="chip">R$ 20 por hora</span>
        </div>
      </div>
      <p className="calc-nota">Só um exemplo. Na ferramenta você põe os seus números e ela calcula os seus.</p>
    </div>
  );
}

function GridRecompensa() {
  return (
    <div className="content-stretch flex gap-[56px] items-center relative shrink-0 w-full">
      <TextoRecompensa />
      <div className="flex-[1_0_0] min-w-px flex items-center justify-center">
        <CalcDemo />
      </div>
    </div>
  );
}

function ConteudoRecompensa() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <GridRecompensa />
    </div>
  );
}

function ComponentRecompensa() {
  return (
    <div id="recompensa" className="bg-black relative shrink-0 w-full" data-name="Recompensa · O que vem junto">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <ConteudoRecompensa />
        </div>
      </div>
    </div>
  );
}

// ─── Jornada (substitui as antigas "04 · A Solução" + "05 · Os 5 Pilares", ─────
// mesmos 5 conceitos das antigas "Pilares" reformulados como jornada; id=jornada)

function LabelJornada() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#ea1d2c] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ea1d2c] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        O CAMINHO INTEIRO
      </p>
    </div>
  );
}

function CabecalhoJornada() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Cabeçalho">
      <LabelJornada />
      <p className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#e5e7eb] text-[40px]">Cinco viradas de chave.</p>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#9aa0ad] text-[17px] w-full max-w-[720px]">
        Cada uma resolve uma coisa que hoje te trava. Conteúdo curto, no celular, entre uma corrida e outra, e você continua de onde parou.
      </p>
    </div>
  );
}

function GridJornada() {
  return (
    <div className="content-stretch flex flex-wrap gap-[14px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid">
      <div className="bg-[#1a1a20] shrink-0 w-[190px] relative rounded-[12px] self-stretch" data-name="LP/Card · Jornada">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[22px] py-[26px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">ETAPA 01</p>
          <svg className="size-[28px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-horizonte" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[17px]">Enxergar mais longe</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">Antes de qualquer ferramenta: perder o medo. Tecnologia deixa de ser coisa de outro mundo e vira caminho. Inclusive o seu.</p>
        </div>
      </div>
      <div className="bg-[#1a1a20] shrink-0 w-[190px] relative rounded-[12px] self-stretch" data-name="LP/Card · Jornada">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[22px] py-[26px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">ETAPA 02</p>
          <svg className="size-[28px] shrink-0 text-[#c8d44a]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-preco" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[17px]">Saber o seu preço</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">Quanto cobrar pra fechar o mês no azul. É o que separa quem fatura de quem trabalha de graça sem perceber.</p>
        </div>
      </div>
      <div className="bg-[#1a1a20] shrink-0 w-[190px] relative rounded-[12px] self-stretch" data-name="LP/Card · Jornada">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[22px] py-[26px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">ETAPA 03</p>
          <svg className="size-[28px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-cnpj" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[17px]">Virar empresa</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">O passo a passo do MEI, explicado sem juridiquês. Você entende o que cada etapa significa e faz a sua com segurança.</p>
        </div>
      </div>
      <div className="bg-[#1a1a20] shrink-0 w-[190px] relative rounded-[12px] self-stretch" data-name="LP/Card · Jornada">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[22px] py-[26px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">ETAPA 04</p>
          <svg className="size-[28px] shrink-0 text-[#c8d44a]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-ia" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[17px]">Ganhar uma mão extra</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">IA pra atender cliente, organizar o dia e resolver o que hoje te toma uma hora. Sem termo técnico e sem computador.</p>
        </div>
      </div>
      <div className="bg-[#1a1a20] shrink-0 w-[190px] relative rounded-[12px] self-stretch" data-name="LP/Card · Jornada">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[22px] py-[26px] relative size-full">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b616f] text-[11px] tracking-[1.32px]">ETAPA 05</p>
          <svg className="size-[28px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-vitrine" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[17px]">Ser encontrado</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">Sua página, seu catálogo e seu contato num link só. O cliente chega até você enquanto a moto tá parada.</p>
        </div>
      </div>
    </div>
  );
}

function ConteudoJornada() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <CabecalhoJornada />
      <GridJornada />
    </div>
  );
}

function ComponentJornada() {
  return (
    <div id="jornada" className="bg-black relative shrink-0 w-full" data-name="Jornada · Cinco viradas de chave">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <ConteudoJornada />
        </div>
      </div>
    </div>
  );
}

// ─── Caminhos (novo, id=caminhos) ──────────────────────────────────────────────

function LabelCaminhos() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#c8d44a] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c8d44a] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        ESCOLHA SUA ROTA
      </p>
    </div>
  );
}

function CabecalhoCaminhos() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Cabeçalho">
      <LabelCaminhos />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[40px]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Tem mais de um jeito</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">de mudar de vida.</p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#9aa0ad] text-[17px] w-full max-w-[720px]">
        Nem todo mundo sonha em ter o próprio negócio, e tudo bem. As mesmas habilidades abrem duas portas. Você escolhe qual atravessa, ou atravessa as duas.
      </p>
    </div>
  );
}

function GridCaminhos() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="Grid">
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Caminho">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[14px] items-start px-[30px] py-[32px] relative size-full">
          <svg className="size-[32px] shrink-0 text-[#c8d44a]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-negocio" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">Levantar o seu</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Você aprende a formalizar, a cobrar certo e a aparecer pra quem compra. Sai daqui sabendo tocar um negócio que é seu, do jeito que você quiser.</p>
        </div>
      </div>
      <div className="bg-[#1a1a20] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Caminho">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[14px] items-start px-[30px] py-[32px] relative size-full">
          <svg className="size-[32px] shrink-0 text-[#c8d44a]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <use href="#i-carreira" />
          </svg>
          <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e5e7eb] text-[19px]">Trocar de vida</p>
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.7] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[14px] w-[min-content]">Essas mesmas habilidades valem carteira assinada lá fora. Se você quiser seguir pra programação ou outra área de tecnologia, o Afreektech continua com você depois do certificado.</p>
        </div>
      </div>
    </div>
  );
}

function ConteudoCaminhos() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <CabecalhoCaminhos />
      <GridCaminhos />
    </div>
  );
}

function ComponentCaminhos() {
  return (
    <div id="caminhos" className="bg-black relative shrink-0 w-full" data-name="Caminhos · Escolha sua rota">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <ConteudoCaminhos />
        </div>
      </div>
    </div>
  );
}

// ─── Faixas de CTA (novas, banner full-width vermelho) ─────────────────────────

function IconSetaFaixa() {
  return (
    <svg className="size-[20px] shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <use href="#i-seta" />
    </svg>
  );
}

function CtaFaixa1() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="CTA · Faixa 1">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[48px] relative size-full">
          <div className="bg-[#ea1d2c] content-stretch flex flex-wrap gap-[24px] items-center justify-between rounded-[16px] px-[40px] py-[36px] relative shrink-0 w-full max-w-[1140px]" data-name="Faixa">
            <div className="[word-break:break-word] flex flex-col gap-[8px] items-start relative shrink-0">
              <p className="font-['Bomstad_Display:Black',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e5e7eb] text-[24px]">Cinco viradas de chave. A primeira é essa aqui.</p>
              <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-white/80 text-[14px]">Dois minutos pra se inscrever. O resto você faz no seu tempo, do celular.</p>
            </div>
            <div className="bg-black content-stretch flex gap-[9px] items-center px-[26px] py-[14px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
              <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.13px] whitespace-nowrap">COMEÇAR MINHA ROTA</p>
              <IconSetaFaixa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CtaFaixa2() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="CTA · Faixa 2">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[48px] relative size-full">
          <div className="bg-[#ea1d2c] content-stretch flex flex-wrap gap-[24px] items-center justify-between rounded-[16px] px-[40px] py-[36px] relative shrink-0 w-full max-w-[1140px]" data-name="Faixa">
            <div className="[word-break:break-word] flex flex-col gap-[8px] items-start relative shrink-0">
              <p className="font-['Bomstad_Display:Black',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e5e7eb] text-[24px]">Tem gente que espera a chance. Tem gente que entra nela.</p>
              <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-white/80 text-[14px]">Sem custo, sem mensalidade e sem pegadinha. Só o seu nome e o primeiro passo.</p>
            </div>
            <div className="bg-black content-stretch flex gap-[9px] items-center px-[26px] py-[14px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
              <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white tracking-[0.13px] whitespace-nowrap">ENTRAR AGORA</p>
              <IconSetaFaixa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Destino / InovaHack (novo, id=destino) ────────────────────────────────────

function LabelDestino() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#ffd7c9] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ffd7c9] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        DEPOIS DO CERTIFICADO
      </p>
    </div>
  );
}

function PremioDestino() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Prêmio">
      <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ea1d2c] text-[32px]">+R$ 20 mil</p>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#9aa0ad] text-[13px]">em prêmios para os projetos que saírem do papel</p>
    </div>
  );
}

function IconSetaDestino() {
  return (
    <svg className="size-[18px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
      <use href="#i-seta" />
    </svg>
  );
}

function TextoDestino() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip relative" data-name="Texto">
      <LabelDestino />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[36px]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Acaba o curso</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">e começa o jogo.</p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#c7cbd4] text-[16px] w-full">
        <span>{`Quem conclui a jornada entra no `}</span>
        <span className="font-['Fivo_Sans_Modern:Bold',sans-serif]">InovaHack</span>
        <span>{`, o movimento nacional de inovação do Movimento Black Money. É onde talento de periferia senta na mesma mesa que desenvolvedor, designer e grande marca para resolver desafio real de mercado, com tecnologia, dados e impacto de verdade.`}</span>
      </p>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#c7cbd4] text-[16px] w-full">
        <span>{`Em 2026 a jornada une a formação online do Afreektech a imersões presenciais. A próxima imersão nacional acontece em `}</span>
        <span className="font-['Fivo_Sans_Modern:Bold',sans-serif]">dezembro de 2026</span>
        <span>{`, e o local é segredo. O território escolhido recebe estrutura completa: mentores de altíssimo nível, desafios reais e grandes patrocinadoras nacionais.`}</span>
      </p>
      <PremioDestino />
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#c7cbd4] text-[16px] w-full">
        Você chega lá com um negócio na mão e sai com mentoria, rede e chance de capital para crescer. Não é sorteio nem promessa solta: é a porta que abre pra quem chegou até o fim.
      </p>
      <div className="border border-[#ea1d2c] border-solid content-stretch flex gap-[9px] items-center px-[26px] py-[14px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
        <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-[#ea1d2c] tracking-[0.13px] whitespace-nowrap">Quero chegar lá</p>
        <IconSetaDestino />
      </div>
    </div>
  );
}

function FotoDestino() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-[clamp(280px,36vw,420px)] aspect-[4/3]" data-name="Foto · InovaHack">
      <div className="absolute inset-0 overflow-hidden rounded-[12px]">
        <img alt="Participantes do InovaHack durante a imersão presencial" className="absolute inset-0 size-full object-cover" src={imgInovahack} />
        <div className="absolute bg-gradient-to-t bottom-0 from-black/80 from-0% inset-x-0 to-transparent to-60%">
          <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[normal] not-italic px-[18px] py-[16px] relative text-[12px] text-white">InovaHack · imersão presencial</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function GridDestino() {
  return (
    <div className="content-stretch flex gap-[48px] items-center overflow-clip relative shrink-0 w-full" data-name="Grid">
      <TextoDestino />
      <FotoDestino />
    </div>
  );
}

function ConteudoDestino() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full max-w-[1140px]" data-name="Conteúdo">
      <GridDestino />
    </div>
  );
}

function ComponentDestino() {
  return (
    <div id="destino" className="bg-[#1a1a20] relative shrink-0 w-full" data-name="Destino · Depois do certificado">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[96px] relative size-full">
          <ConteudoDestino />
        </div>
      </div>
    </div>
  );
}

// ─── Fechamento (novo, id=fechamento) ──────────────────────────────────────────

function LabelFechamento() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Label">
      <div className="bg-[#c8d44a] h-px relative shrink-0 w-[18px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Archivo:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c8d44a] text-[11px] tracking-[1.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        AGORA É COM VOCÊ
      </p>
    </div>
  );
}

function IconArrowRightFechamento() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon/arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 15" width="18">
        <g id="icon/arrow-right">
          <path d={svgPaths.pa112780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function ConteudoFechamento() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-center overflow-clip relative shrink-0 w-full max-w-[760px]" data-name="Conteúdo">
      <LabelFechamento />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[44px] text-center">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">Daqui a um ano você vai</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">olhar pra trás. O que</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15]">você quer ver?</p>
      </div>
      <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.75] not-italic relative shrink-0 text-[#c7cbd4] text-[17px] text-center w-full">
        Tem dois caminhos daqui. No primeiro, tudo segue igual: a meta do dia zera à meia-noite e recomeça. No segundo, você começa a construir uma coisa que é sua e que não zera nunca. A diferença entre os dois cabe em dois minutos de inscrição.
      </p>
      <div className="bg-[#ea1d2c] content-stretch flex gap-[10px] items-center px-[40px] py-[20px] relative rounded-[8px] shrink-0" data-name="LP/Botão · Primário">
        <p className="[word-break:break-word] font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap">QUERO COMEÇAR AGORA</p>
        <IconArrowRightFechamento />
      </div>
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5b616f] text-[13px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        De graça · Com certificado · No celular · No seu ritmo
      </p>
    </div>
  );
}

function ComponentFechamento() {
  return (
    <div id="fechamento" className="bg-black relative shrink-0 w-full" data-name="Fechamento · Agora é com você">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[clamp(32px,25vw_-_160px,200px)] py-[110px] relative size-full">
          <ConteudoFechamento />
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
        <span className="leading-[1.75]">{`O iFood é a maior plataforma de delivery do Brasil — e o `}</span>
        <span className="font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.75]">Chega Junto</span>
        <span className="leading-[1.75]">{` é o jeito dele caminhar ao lado de quem move a cidade todo dia. O `}</span>
        <span className="font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.75]">Afreektech</span>
        <span className="leading-[1.75]">{` é a escola de tecnologia que transforma esse apoio em habilidade de verdade. Dessa dupla nasce a Rota do Crescimento: você segue na corrida e ainda constrói o próprio caminho.`}</span>
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
        iFood · Chega Junto
      </p>
      <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">O programa do iFood que chega junto com o entregador: banca formação de verdade pra quem faz a entrega acontecer.</p>
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
      <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">A escola de tecnologia que forma gente em habilidade digital de verdade — a que abre porta no mercado.</p>
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
            <svg className="size-[26px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <use href="#i-parceria" />
            </svg>
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
            <svg className="size-[26px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <use href="#i-selo" />
            </svg>
            <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#e5e7eb] text-[15px] text-center w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Habilidade que abre portas
            </p>
            <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#9aa0ad] text-[13px] text-center w-[min-content]">Conteúdo prático e certificado de conclusão, competências que o mercado reconhece e paga.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Reforço">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col items-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center px-[24px] py-[26px] relative size-full">
            <svg className="size-[26px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <use href="#i-celular" />
            </svg>
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
    <div id="confianca" className="bg-black relative shrink-0 w-full" data-name="06 · Credibilidade">
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
      <svg className="size-[18px] shrink-0 text-[#e5e7eb]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-pergunta" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">É mesmo de graça?</p>
    </div>
  );
}

function Linha2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-check" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">Sim. 100% gratuito: sem taxa de matrícula, sem mensalidade e sem pagamento no final. Quem banca é o Chega Junto, o programa do iFood, em parceria com o Afreektech.</p>
    </div>
  );
}

function Linha3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#e5e7eb]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-pergunta" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Preciso de computador?</p>
    </div>
  );
}

function Linha4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-check" />
      </svg>
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
      <svg className="size-[18px] shrink-0 text-[#e5e7eb]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-pergunta" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Tem certificado de verdade?</p>
    </div>
  );
}

function Linha7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-check" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">Sim. Certificado de conclusão para usar ao abrir MEI, acessar crédito e mostrar para clientes.</p>
    </div>
  );
}

function Linha8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#e5e7eb]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-pergunta" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Preciso já saber de tecnologia?</p>
    </div>
  );
}

function Linha9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-check" />
      </svg>
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
      <svg className="size-[18px] shrink-0 text-[#e5e7eb]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-pergunta" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Consigo fazer trabalhando como entregador ativo?</p>
    </div>
  );
}

function Linha12() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-check" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">Sim. O conteúdo é assíncrono, você acessa no seu tempo, sem atrapalhar suas entregas.</p>
    </div>
  );
}

function Linha13() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#e5e7eb] text-[15px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#e5e7eb]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-pergunta" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Bold',sans-serif] leading-[1.4] min-w-px not-italic relative">Preciso ter quanto tempo livre?</p>
    </div>
  );
}

function Linha14() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 text-[#9aa0ad] text-[14px] w-full" data-name="Linha">
      <svg className="size-[18px] shrink-0 text-[#ea1d2c]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <use href="#i-check" />
      </svg>
      <p className="flex-[1_0_0] font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.65] min-w-px not-italic relative">O que der. O conteúdo é curto e fica salvo, você avança entre uma corrida e outra, e continua de onde parou.</p>
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
    <div id="faq" className="bg-[#101014] relative shrink-0 w-full" data-name="07 · Quebra de Objeções">
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
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">Pelo celular, no seu ritmo, quando der.</p>
        </div>
      </div>
      <div className="bg-[#101014] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="LP/Card · Passo">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.09)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic px-[26px] py-[30px] relative size-full">
          <p className="font-['Fivo_Sans_Modern:Heavy',sans-serif] leading-[normal] relative shrink-0 text-[#ea1d2c] text-[40px]">3</p>
          <p className="font-['Bomstad_Display:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#e5e7eb] text-[16px]">Você aprende na prática</p>
          <p className="font-['Fivo_Sans_Modern:Regular',sans-serif] leading-[1.6] min-w-full relative shrink-0 text-[#9aa0ad] text-[13px] w-[min-content]">Cinco viradas de chave, aplicáveis desde o primeiro dia.</p>
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
    <div id="passos" className="bg-[#101014] relative shrink-0 w-full" data-name="09 · Como Funciona">
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

function Item4() {
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
        Concorra a capital semente no InovaHack
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
      <Item4 />
    </div>
  );
}

function Texto3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-w-px overflow-clip relative" data-name="Texto">
      <Label6 />
      <div className="[word-break:break-word] font-['Changa:ExtraBold',sans-serif] font-extrabold leading-[0] not-italic relative shrink-0 text-[#e5e7eb] text-[40px]">
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif] leading-[1.15] mb-0">A próxima corrida</p>
        <p className="font-['Bomstad_Display:ExtraBold',sans-serif]">
          <span className="leading-[1.15]">{`pode ser `}</span>
          <span className="leading-[1.15] text-[#ea1d2c]">outra história.</span>
        </p>
      </div>
      <p className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.75] min-w-full relative shrink-0 text-[#c7cbd4] text-[17px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Leva dois minutos pra se inscrever. Depois é só abrir no celular e começar quando der. Hoje à noite, amanhã cedo, no intervalo do almoço.
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
      <p className="relative shrink-0">Menos de 1 ano</p>
      <p className="relative shrink-0">1 a 3 anos</p>
      <p className="relative shrink-0">3 a 5 anos</p>
      <p className="relative shrink-0">5 a 10 anos</p>
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
                <p className="[word-break:break-word] font-['Bomstad_Display:Black',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white tracking-[0.15px]">QUERO COMEÇAR AGORA</p>
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
    <div id="inscricao" className="bg-[#101014] relative shrink-0 w-full" data-name="10 · Inscrição / CTA Final">
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
      <a href="#inscricao" className="relative shrink-0 hover:text-[#c7cbd4] transition-colors" style={{ fontVariationSettings: '"wdth" 100' }}>
        Inscreva-se
      </a>
      <a href="#jornada" className="relative shrink-0 hover:text-[#c7cbd4] transition-colors" style={{ fontVariationSettings: '"wdth" 100' }}>
        O que você aprende
      </a>
      {/* Sem rota real de política de privacidade no app hoje (SPA sem react-router) —
          fica como texto inerte até existir uma URL de verdade pra apontar. */}
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
      <ComponentProposta />
      <ComponentProva />
      <Component10InscricaoCtaFinal />
      <ComponentRecompensa />
      <ComponentJornada />
      <ComponentCaminhos />
      <CtaFaixa1 />
      <Component06Credibilidade />
      <ComponentDestino />
      <CtaFaixa2 />
      <Component09ComoFunciona />
      <Component07QuebraDeObjecoes />
      <ComponentFechamento />
      <Component11Rodape />
    </div>
  );
}