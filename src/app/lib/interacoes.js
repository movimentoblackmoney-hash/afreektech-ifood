/* =============================================================================
   interacoes.js — trilhos (arrasta pro lado), reveal ao rolar, coverflow de
   professores e calculadora em movimento.

   Adaptado do pacote LP-v2-joao pra rodar num app React (SPA): a versão
   original rodava num <script> de página estática, disparando no
   DOMContentLoaded — aqui os elementos só existem depois que o React
   termina de montar a árvore, então em vez de auto-executar, este módulo
   exporta `iniciarInteracoes()`, chamada uma vez num useEffect em App.tsx
   (ver comentário lá). Cada `montar*` grava um atributo `data-montado` no
   elemento antes de ligar os listeners — idempotente, protege contra uma
   chamada dupla (StrictMode, HMR) inicializar dois autoplays na mesma seção.

   Fora isso, a mecânica é idêntica ao pacote: mesma geometria do coverflow,
   mesmos tempos da calculadora, mesmo trilho arrastável.
   ========================================================================== */
  var semMovimento = window.matchMedia &&
                     window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ───────────────── 1. TRILHOS ─────────────────
     Cada .rail tem um .rail__track. Os botões são criados aqui: se o JS não
     rodar, eles nem aparecem — e ninguém vê um controle que não funciona. */
  function montarTrilho(rail) {
    if (rail.dataset.montado) return;
    rail.dataset.montado = '1';
    var track = rail.querySelector('.rail__track');
    if (!track) return;

    var nav   = rail.querySelector('.rail__nav');
    var antes = nav && nav.querySelector('[data-dir="antes"]');
    var apos  = nav && nav.querySelector('[data-dir="apos"]');

    function passo() {
      var primeiro = track.firstElementChild;
      if (!primeiro) return track.clientWidth * 0.8;
      var gap = parseFloat(getComputedStyle(track).columnGap || '24') || 24;
      return primeiro.getBoundingClientRect().width + gap;
    }

    function atualizarBotoes() {
      if (!antes || !apos) return;
      var max = track.scrollWidth - track.clientWidth;
      /* tolerância: o track tem padding lateral, então scrollLeft em repouso
         não é 0 — sem folga o botão "anterior" nunca fica desabilitado. */
      var folga = parseFloat(getComputedStyle(track).paddingLeft || '0') + 4;
      antes.disabled = track.scrollLeft <= folga;
      apos.disabled  = track.scrollLeft >= max - folga;
      // se não há o que rolar, esconde a navegação inteira
      if (nav) nav.hidden = max <= folga * 2;
    }

    if (antes) antes.addEventListener('click', function () {
      track.scrollBy({ left: -passo(), behavior: semMovimento ? 'auto' : 'smooth' });
    });
    if (apos) apos.addEventListener('click', function () {
      track.scrollBy({ left: passo(), behavior: semMovimento ? 'auto' : 'smooth' });
    });

    track.addEventListener('scroll', function () {
      window.requestAnimationFrame(atualizarBotoes);
    }, { passive: true });
    window.addEventListener('resize', atualizarBotoes);

    /* arrasto com o mouse — só no desktop com ponteiro fino.
       No touch o scroll nativo já resolve e interceptar só atrapalha. */
    var finoEHover = window.matchMedia &&
                     window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (finoEHover) {
      track.classList.add('can-drag');
      var arrastando = false, xInicial = 0, scrollInicial = 0, moveu = 0;

      track.addEventListener('pointerdown', function (e) {
        if (e.button !== 0) return;
        arrastando = true; moveu = 0;
        xInicial = e.clientX; scrollInicial = track.scrollLeft;
        track.classList.add('is-grabbing');
        track.setPointerCapture(e.pointerId);
      });
      track.addEventListener('pointermove', function (e) {
        if (!arrastando) return;
        var d = e.clientX - xInicial;
        moveu = Math.max(moveu, Math.abs(d));
        track.scrollLeft = scrollInicial - d;
      });
      function soltar(e) {
        if (!arrastando) return;
        arrastando = false;
        track.classList.remove('is-grabbing');
        try { track.releasePointerCapture(e.pointerId); } catch (err) {}
      }
      track.addEventListener('pointerup', soltar);
      track.addEventListener('pointercancel', soltar);
      /* se houve arrasto de verdade, engole o clique — senão o card
         "clicado" no fim do arrasto navega sem querer. */
      track.addEventListener('click', function (e) {
        if (moveu > 8) { e.preventDefault(); e.stopPropagation(); }
        moveu = 0;
      }, true);
    }

    atualizarBotoes();
  }

  /* ───────────────── 2. REVEAL AO ROLAR ─────────────────
     Sem IntersectionObserver ou com movimento reduzido: mostra tudo. */
  function montarReveal() {
    var alvos = [].slice.call(document.querySelectorAll('[data-anim]'))
      .filter(function (el) { return !el.dataset.montado; });
    if (!alvos.length) return;
    alvos.forEach(function (el) { el.dataset.montado = '1'; });

    if (semMovimento || !('IntersectionObserver' in window)) {
      alvos.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (ent) {
        if (!ent.isIntersecting) return;
        ent.target.classList.add('is-in');
        obs.unobserve(ent.target);      // anima uma vez só
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    alvos.forEach(function (el) { obs.observe(el); });
  }

  /* ───────────────── 3. COVERFLOW DE PROFESSORES ─────────────────
     Geometria medida na LP irmã (mover.afreektech.com.br):
       deslocamento │ X      rotateY   Z        escala  opacidade  z-index
             0      │   0%      0°      0px      1.00     1          100
            ±1      │ ±58%    ∓34°   -170px     0.94     0.70         90
            ±2      │±116%    ∓68°   -340px     0.88     0.40         80
            ±3      │±174%   ∓102°   -510px     0.82     0            70
     Autoplay: 4s parado em cada professor. Pausa no hover, no foco,
     no toque e quando a aba sai de vista. Desligado se o usuário pediu
     movimento reduzido.                                                */
  var PAUSA_MS = 4000;

  function montarCoverflow(cover) {
    if (cover.dataset.montado) return;
    cover.dataset.montado = '1';
    var stage = cover.querySelector('.cover__stage');
    if (!stage) return;
    var cards = [].slice.call(stage.querySelectorAll('.cover__card'));
    var n = cards.length;
    if (!n) return;

    var nav   = cover.parentNode.querySelector('.cover__nav');
    var dots  = nav ? [].slice.call(nav.querySelectorAll('.cover__dot')) : [];
    var ant   = nav ? nav.querySelector('[data-dir="antes"]') : null;
    var prox  = nav ? nav.querySelector('[data-dir="apos"]') : null;

    var atual = Math.min(1, n - 1);   // começa no segundo, como na irmã
    var timer = null, pausado = false;

    function desloc(i) {
      var d = i - atual;
      if (d >  n / 2) d -= n;         // embrulha pelo caminho mais curto
      if (d < -n / 2) d += n;
      return d;
    }

    function pintar() {
      cards.forEach(function (c, i) {
        var d = desloc(i), a = Math.abs(d);
        c.style.transform =
          'translateX(' + (d * 58) + '%) rotateY(' + (-d * 34) + 'deg) ' +
          'translateZ(' + (-a * 170) + 'px) scale(' + (1 - a * 0.06).toFixed(2) + ')';
        c.style.opacity = a === 0 ? '1' : (a === 1 ? '0.7' : (a === 2 ? '0.4' : '0'));
        c.style.zIndex  = String(100 - a * 10);
        c.classList.toggle('is-active', d === 0);
        /* fora do alcance visível não recebe foco nem leitura de tela */
        c.setAttribute('aria-hidden', a > 2 ? 'true' : 'false');
        c.tabIndex = d === 0 ? 0 : -1;
      });
      dots.forEach(function (p, i) {
        p.classList.toggle('is-on', i === atual);
        p.setAttribute('aria-current', i === atual ? 'true' : 'false');
      });
    }

    function irPara(i) { atual = (i % n + n) % n; pintar(); }
    function avancar() { irPara(atual + 1); }
    function voltar()  { irPara(atual - 1); }

    /* ---- autoplay ---- */
    function tocar() {
      if (semMovimento || pausado || timer) return;
      timer = window.setInterval(avancar, PAUSA_MS);
    }
    function parar() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }
    function reiniciar() { parar(); tocar(); }
    function segurar()  { pausado = true;  parar(); }
    function soltar()   { pausado = false; tocar(); }

    cover.addEventListener('mouseenter', segurar);
    cover.addEventListener('mouseleave', soltar);
    cover.addEventListener('focusin',  segurar);
    cover.addEventListener('focusout', soltar);
    if (nav) {
      nav.addEventListener('mouseenter', segurar);
      nav.addEventListener('mouseleave', soltar);
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) parar(); else tocar();
    });

    /* ---- controles ---- */
    if (ant)  ant.addEventListener('click',  function () { voltar();  reiniciar(); });
    if (prox) prox.addEventListener('click', function () { avancar(); reiniciar(); });
    dots.forEach(function (p, i) {
      p.addEventListener('click', function () { irPara(i); reiniciar(); });
    });
    cards.forEach(function (c, i) {
      c.addEventListener('click', function () {
        if (i !== atual) { irPara(i); reiniciar(); }
      });
    });

    /* ---- teclado no palco ---- */
    cover.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { voltar();  reiniciar(); e.preventDefault(); }
      if (e.key === 'ArrowRight') { avancar(); reiniciar(); e.preventDefault(); }
    });

    /* ---- arrastar / deslizar ---- */
    var x0 = null;
    cover.addEventListener('pointerdown', function (e) { x0 = e.clientX; segurar(); });
    cover.addEventListener('pointerup', function (e) {
      if (x0 === null) { soltar(); return; }
      var d = e.clientX - x0; x0 = null;
      if (Math.abs(d) > 40) { d < 0 ? avancar() : voltar(); }
      soltar();
    });
    cover.addEventListener('pointercancel', function () { x0 = null; soltar(); });

    /* só liga o autoplay quando o bloco entra em tela — carrossel girando
       fora de vista é bateria gasta à toa. */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (ents) {
        ents.forEach(function (ent) { ent.isIntersecting ? tocar() : parar(); });
      }, { threshold: 0.2 }).observe(cover);
    } else { tocar(); }

    pintar();
  }

  /* ───────────────── 4. CALCULADORA EM MOVIMENTO ─────────────────
     A calculadora FAZ a conta na frente da pessoa: as linhas entram uma a
     uma, a luz varre o cartão, e o resultado sobe de 0 até o número final.

     Segurança por construção: o HTML já traz "R$ 160" e "R$ 20". A classe
     .is-armada (que esconde tudo pra animar) só é posta pelo JS, e só
     quando a animação vai realmente tocar. Sem JS, com movimento reduzido
     ou sem IntersectionObserver, a calculadora aparece pronta.            */
  /* ──────────── 4. CALCULADORA QUE FICA CALCULANDO ────────────
     Não é uma animação de entrada: o cartão RECALCULA em ciclo, trocando de
     cenário na frente da pessoa. Cada volta: os campos viram, a luz varre o
     cartão e o resultado corre do valor anterior até o novo. A barra embaixo
     mostra quanto falta para o próximo cálculo.

     Os números são EXEMPLOS — o texto sob o cartão diz isso — mas a conta de
     cada cenário fecha de verdade: o filtro abaixo recusa cenário onde
     `meta + gasto != bruto` ou `bruto / horas != hora`. Calculadora que mostra
     conta errada destrói a confiança na ferramenta que ela está vendendo. */
  var CALC_PASSO_MS = 380;    // entrada das linhas, na primeira volta
  var CALC_CONTA_MS = 1100;   // duração da contagem do resultado
  var CALC_CICLO_MS = 4600;   // quanto cada cenário fica na tela
  var CALC_TROCA_MS = 240;    // saída/entrada de cada campo na troca

  var CALC_CENARIOS = [
    { meta: 120, local: 'Guarulhos, SP',      horas: 8,  gasto: 40 },
    { meta: 180, local: 'Salvador, BA',       horas: 9,  gasto: 45 },
    { meta: 150, local: 'Belo Horizonte, MG', horas: 6,  gasto: 30 },
    { meta: 200, local: 'Recife, PE',         horas: 10, gasto: 50 }
  ].map(function (c) {
    c.bruto = c.meta + c.gasto;
    c.hora  = c.bruto / c.horas;
    return c;
  }).filter(function (c) {
    var inteiro = c.hora === Math.round(c.hora);
    if (!inteiro && window.console) {
      console.warn('cenario descartado (valor por hora quebrado):', c);
    }
    return inteiro;
  });

  function contarAte(el, alvo, de) {
    if (!isFinite(alvo)) return;
    var prefixo = el.getAttribute('data-prefixo') || '';
    var inicio  = isFinite(de) ? de : 0;
    var fechado = false;

    function fechar() {
      if (fechado) return;
      fechado = true;
      el.textContent = prefixo + alvo;        // termina sempre no valor exato
    }
    /* Garantia independente do requestAnimationFrame: com o navegador
       limitando quadros (aba em segundo plano, economia de bateria — medido
       no QA: 1 quadro em 600ms), o valor final entra pelo relógio. */
    window.setTimeout(fechar, CALC_CONTA_MS + 120);

    var t0 = null;
    function quadro(t) {
      if (fechado) return;
      if (t0 === null) t0 = t;
      var q = Math.min(1, (t - t0) / CALC_CONTA_MS);
      var e = 1 - Math.pow(1 - q, 3);         // desacelera no fim
      el.textContent = prefixo + Math.round(inicio + (alvo - inicio) * e);
      if (q < 1) window.requestAnimationFrame(quadro); else fechar();
    }
    window.requestAnimationFrame(quadro);
  }

  function montarCalc(calc) {
    if (calc.dataset.montado) return;
    if (semMovimento || !('IntersectionObserver' in window)) return;
    if (!CALC_CENARIOS.length) return;
    calc.dataset.montado = '1';

    var linhas = [].slice.call(calc.querySelectorAll('.calc__campo'));
    var caixa  = calc.querySelector('.calc__resultado');
    var bruto  = calc.querySelector('.calc__bruto span[data-conta]');
    var hora   = calc.querySelector('.calc__hora span[data-conta]');
    var barra  = calc.querySelector('.calc__ciclo span');
    var campos = {
      meta:    calc.querySelector('[data-campo="meta"]'),
      local:   calc.querySelector('[data-campo="local"]'),
      jornada: calc.querySelector('[data-campo="jornada"]')
    };
    if (!linhas.length || !caixa || !bruto || !hora) return;

    [bruto, hora].forEach(function (n) { n.setAttribute('data-final', n.textContent); });
    calc.classList.add('is-armada');

    var tocou = false, desistiu = false, parado = false;
    var atual = 0, relogio = null;

    /* saída de emergência: nenhuma condição deixa a pessoa olhando "R$ 0" */
    function repor() {
      if (tocou || desistiu) return;
      desistiu = true;
      [bruto, hora].forEach(function (n) { n.textContent = n.getAttribute('data-final'); });
      calc.classList.remove('is-armada', 'is-calculando');
      calc.classList.add('is-pronta');
    }

    function reiniciarBarra() {
      if (!barra) return;
      barra.style.transition = 'none';
      barra.style.transform  = 'scaleX(0)';
      void barra.offsetWidth;                 // força o navegador a assumir o zero
      barra.style.transition = 'transform ' + CALC_CICLO_MS + 'ms linear';
      barra.style.transform  = 'scaleX(1)';
    }
    function congelarBarra() {
      if (!barra) return;
      var t = getComputedStyle(barra).transform;
      barra.style.transition = 'none';
      barra.style.transform  = t;
    }

    /* os três campos viram com um leve desencontro: o cartão parece
       recalculando, em vez de piscar tudo de uma vez */
    function trocarCampos(c) {
      ['meta', 'local', 'jornada'].forEach(function (chave, k) {
        var el = campos[chave];
        if (!el) return;
        window.setTimeout(function () {
          el.classList.add('is-saindo');
          window.setTimeout(function () {
            if (chave === 'meta')         el.textContent = 'R$ ' + c.meta;
            else if (chave === 'local')   el.textContent = c.local;
            else                          el.textContent = c.horas + 'h · R$ ' + c.gasto;
            el.classList.remove('is-saindo');
            el.classList.add('is-entrando');
            window.setTimeout(function () { el.classList.remove('is-entrando'); }, CALC_TROCA_MS);
          }, CALC_TROCA_MS);
        }, k * 90);
      });
    }

    function calcular(c, deBruto, deHora) {
      calc.classList.add('is-calculando');
      trocarCampos(c);
      window.setTimeout(function () {
        contarAte(bruto, c.bruto, deBruto);
        contarAte(hora,  c.hora,  deHora);
        calc.classList.remove('is-calculando');
      }, CALC_TROCA_MS + 240);
      reiniciarBarra();
    }

    function proximo() {
      var antes = CALC_CENARIOS[atual];
      atual = (atual + 1) % CALC_CENARIOS.length;
      calcular(CALC_CENARIOS[atual], antes.bruto, antes.hora);
    }

    function girar() {
      if (parado || desistiu || relogio || !tocou) return;
      relogio = window.setInterval(proximo, CALC_CICLO_MS);
      reiniciarBarra();
    }
    function parar() {
      if (relogio) { window.clearInterval(relogio); relogio = null; }
      congelarBarra();
    }

    /* primeira volta: as linhas entram uma a uma; depois o ciclo assume */
    function tocar() {
      if (tocou || desistiu) return;
      tocou = true;
      calc.classList.add('is-calculando');
      [bruto, hora].forEach(function (n) {
        n.textContent = (n.getAttribute('data-prefixo') || '') + '0';
      });
      linhas.forEach(function (l, k) {
        window.setTimeout(function () { l.classList.add('is-in'); }, k * CALC_PASSO_MS);
      });
      window.setTimeout(function () {
        caixa.classList.add('is-in');
        contarAte(bruto, CALC_CENARIOS[0].bruto, 0);
        contarAte(hora,  CALC_CENARIOS[0].hora,  0);
        calc.classList.remove('is-calculando');
        calc.classList.add('is-pronta');
        girar();
      }, linhas.length * CALC_PASSO_MS + 180);
    }

    /* Gatilho 1: entrou em tela. Fora de tela o ciclo para — cartão girando
       escondido é bateria gasta à toa. */
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (ent) {
        if (ent.isIntersecting) { tocar(); girar(); } else { parar(); }
      });
    }, { threshold: [0, 0.3] });
    obs.observe(calc);

    /* Gatilho 2 (rede): medida direta na rolagem. O IO não emite com a
       página oculta nem em alguns modos de pré-renderização — medido no QA. */
    function porGeometria() {
      if (tocou || desistiu) return desligarRede();
      var r = calc.getBoundingClientRect();
      var visivel = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
      if (visivel > Math.min(r.height, window.innerHeight) * 0.3) {
        tocar(); girar(); desligarRede();
      }
    }
    function desligarRede() {
      window.removeEventListener('scroll', porGeometria);
      window.removeEventListener('resize', porGeometria);
    }
    window.addEventListener('scroll', porGeometria, { passive: true });
    window.addEventListener('resize', porGeometria);
    porGeometria();

    /* respeita quem está lendo: para no hover, no foco e com a aba escondida */
    function segurar() { parado = true;  parar(); }
    function soltar()  { parado = false; girar(); }
    calc.addEventListener('mouseenter', segurar);
    calc.addEventListener('mouseleave', soltar);
    calc.addEventListener('focusin',  segurar);
    calc.addEventListener('focusout', soltar);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) parar(); else girar();
    });

    /* último recurso: passou por ela e nada tocou → repor os valores reais */
    window.setTimeout(function () {
      if (tocou) return;
      var r = calc.getBoundingClientRect();
      if (r.top < window.innerHeight) repor();
    }, 8000);
  }

/** Chamar uma vez, depois que o React montou a árvore (ver useEffect em App.tsx).
 * Idempotente: rodar de novo (HMR, StrictMode) não duplica listeners/autoplay —
 * cada montar* marca o elemento com data-montado antes de ligar qualquer coisa. */
export function iniciarInteracoes() {
  document.querySelectorAll('.rail').forEach(montarTrilho);
  document.querySelectorAll('.cover').forEach(montarCoverflow);
  document.querySelectorAll('[data-calc]').forEach(montarCalc);
  montarReveal();
}
