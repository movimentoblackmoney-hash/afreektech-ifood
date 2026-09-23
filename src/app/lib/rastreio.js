/* =============================================================================
   rastreio.js — camada única de medição da LP Afreektech
   Serve a todas as LPs irmãs (ifood, mover, petrobras, institucional):
   troque só o bloco CONFIG abaixo.

   O que faz:
     1. Consentimento (LGPD) antes de qualquer hit — negado por padrão.
     2. GA4 (gtag) + Meta Pixel, carregados sem bloquear a página.
     3. dataLayer pronto para receber um GTM depois, sem refatorar nada.
     4. Captura e persiste UTM/gclid/fbclid: first-touch e last-touch.
     5. Injeta a origem nos campos escondidos do formulário Brevo.
     6. Dispara `Lead` UMA vez por inscrição, com event_id para deduplicar
        com a CAPI quando ela existir.
     7. window.__rastreioStatus() para validar em produção sem DevTools.
   ========================================================================== */
(function () {
  'use strict';

  /* ════════════════════ CONFIG — é só isto que muda por LP ════════════════ */
  var C = {
    GA4_ID:        'G-SRNSLRFPXG',
    META_PIXEL_ID: '1760417378434407',
    GTM_ID:        '',                 // vazio = sem GTM. Ver erro 5 no README.
    PROJETO:       'ifood',
    UTM_TTL_DIAS:  90,
    DEBUG:         /[?&]rastreio_debug=1/.test(location.search),

    // Neste app (React) o form do Brevo não usa o main.js/widget do Brevo pra
    // exibir sucesso/erro — o submit é via fetch() direto no BrevoLeadForm.tsx,
    // e o painel #success-message/#error-message do Brevo fica sempre escondido
    // (hideRow). Por isso a detecção por DOM aqui embaixo nunca encontra nada —
    // de propósito, inofensiva. O Lead é disparado manualmente por
    // window.rastreioLead() no exato ponto em que o App.tsx confirma sucesso
    // (result.status === "success"), que é um sinal mais confiável do que
    // observar o DOM do Brevo.
    SELETORES_SUCESSO: [
      '#success-message',
      '.sib-form-message-panel--success',
      '[class*="sib-form-message-panel"][class*="success"]'
    ],
    SELETORES_ERRO: [
      '#error-message',
      '.sib-form-message-panel--error',
      '[class*="sib-form-message-panel"][class*="error"]'
    ],
    // Vazio de propósito: BrevoLeadForm.tsx (useEffect de montagem) já escreve
    // UTM_SOURCE/UTM_MEDIUM/UTM_CAMPAIGN via getUtms() — com os defaults
    // específicos do iFood ("ifood-parceiro" etc.). Se preenchêssemos os mesmos
    // campos aqui também, o rastreio.js reescreveria por cima a cada 1s (com
    // fallback genérico "(direct)"), perdendo os defaults do projeto. O form
    // não tem UTM_CONTENT nem PROJETO como atributo no Brevo.
    CAMPOS_BREVO: {}
  };
  /* ════════════════════════════════════════════════════════════════════════ */

  var PROJETO    = C.PROJETO;
  var CHAVE_FIRST = 'afk_origem_first';
  var CHAVE_LAST  = 'afk_origem_last';
  var CHAVE_LEAD  = 'afk_lead_disparado';

  var estado = {
    leadDisparado: false,
    eventIdUltimoLead: null,
    origemGatilho: null,
    observerAtivo: false,
    formSubmetido: false,
    sucessoVisivelNoInicio: {}
  };

  function log() {
    if (!C.DEBUG) return;
    var a = ['[rastreio]'].concat([].slice.call(arguments));
    console.log.apply(console, a);
  }

  /* ───────────────── armazenamento tolerante a falha ─────────────────
     Safari privado e WebView do app bloqueiam storage. Nunca quebrar.  */
  function gravarJSON(chave, valor, store) {
    try { (store || window.localStorage).setItem(chave, JSON.stringify(valor)); return true; }
    catch (e) { log('storage bloqueado ao gravar', chave); return false; }
  }
  function lerJSON(chave, store) {
    try {
      var b = (store || window.localStorage).getItem(chave);
      return b ? JSON.parse(b) : null;
    } catch (e) { return null; }
  }
  function expirado(o) {
    if (!o || !o.ts) return true;
    return (Date.now() - o.ts) > (C.UTM_TTL_DIAS * 24 * 60 * 60 * 1000);
  }
  function gerarEventId() {
    try {
      if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
    } catch (e) {}
    return 'lead_' + Date.now() + '_' + Math.random().toString(36).slice(2, 10);
  }

  /* ───────────────── origem: first-touch e last-touch ───────────────── */
  var PARAMS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'];

  function lerParamsDaURL() {
    var q = new URLSearchParams(location.search), o = {}, achou = false;
    PARAMS.forEach(function (p) {
      var v = q.get(p);
      if (v) { o[p] = v.slice(0, 200); achou = true; }
    });
    if (!achou) return null;
    o.landing_page = location.pathname;
    o.referrer     = document.referrer || '';
    return o;
  }

  function persistirOrigem() {
    var atual = lerParamsDaURL();
    if (!atual) return;
    var pacote = { ts: Date.now(), dados: atual };
    // last-touch: sempre sobrescreve
    gravarJSON(CHAVE_LAST, pacote);
    // first-touch: só grava se não existir ou se já expirou
    var first = lerJSON(CHAVE_FIRST);
    if (!first || expirado(first)) gravarJSON(CHAVE_FIRST, pacote);
    log('origem persistida', atual);
  }

  function obterOrigem() {
    var f = lerJSON(CHAVE_FIRST), l = lerJSON(CHAVE_LAST);
    if (f && expirado(f)) f = null;
    if (l && expirado(l)) l = null;
    var daURL = lerParamsDaURL();
    // efetiva: o que veio agora > last > first
    var efetiva = daURL || (l && l.dados) || (f && f.dados) || {};
    return { first: f ? f.dados : null, last: l ? l.dados : null, efetiva: efetiva };
  }

  /* ───────────────── consentimento (negado por padrão) ───────────────── */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    'ad_storage':              'denied',
    'ad_user_data':            'denied',
    'ad_personalization':      'denied',
    'analytics_storage':       'denied',
    'personalization_storage': 'denied',
    'functionality_storage':   'granted',
    'security_storage':        'granted',
    'wait_for_update': 500
  });
  gtag('js', new Date());
  gtag('config', C.GA4_ID, { send_page_view: true, anonymize_ip: true });

  /* ───────────────── carregamento das bibliotecas ───────────────── */
  function carregarScript(src, attrs) {
    var s = document.createElement('script');
    s.async = true; s.src = src;
    if (attrs) Object.keys(attrs).forEach(function (k) { s.setAttribute(k, attrs[k]); });
    document.head.appendChild(s);
    return s;
  }

  function carregarGA4() {
    if (!C.GA4_ID) return;
    carregarScript('https://www.googletagmanager.com/gtag/js?id=' + C.GA4_ID);
  }

  function carregarMetaPixel() {
    if (!C.META_PIXEL_ID) return;
    /* snippet oficial do Meta, reescrito legível */
    if (window.fbq) return;
    var n = window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    carregarScript('https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('consent', 'revoke');            // respeita o consentimento
    window.fbq('init', C.META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  function carregarGTM() {
    if (!C.GTM_ID) return;
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    carregarScript('https://www.googletagmanager.com/gtm.js?id=' + C.GTM_ID);
  }

  carregarGA4();
  carregarMetaPixel();
  carregarGTM();

  /* ───────────────── injeção da origem no form Brevo ───────────────── */
  function preencherCamposBrevo(escopo) {
    var raiz = escopo || document;
    var o = obterOrigem().efetiva;
    var valores = {
      utm_source:   o.utm_source   || '(direct)',
      utm_medium:   o.utm_medium   || '(none)',
      utm_campaign: o.utm_campaign || '(not set)',
      utm_content:  o.utm_content  || '',
      projeto:      PROJETO
    };
    var preenchidos = 0;
    Object.keys(C.CAMPOS_BREVO).forEach(function (chave) {
      var el = raiz.querySelector(C.CAMPOS_BREVO[chave]);
      if (el && valores[chave] !== undefined) {
        el.value = valores[chave];
        preenchidos++;
      }
    });
    log('campos Brevo preenchidos:', preenchidos);
    return preenchidos;
  }

  /* ───────────────── disparo do Lead (uma vez só) ───────────────── */
  function dispararLead(gatilho, extras) {
    if (estado.leadDisparado) { log('lead ignorado (memória)', gatilho); return false; }

    var jaNaSessao = lerJSON(CHAVE_LEAD, window.sessionStorage);
    if (jaNaSessao && !expirado(jaNaSessao)) {
      estado.leadDisparado = true;
      estado.eventIdUltimoLead = jaNaSessao.event_id;
      log('lead ignorado (sessão)', gatilho);
      return false;
    }

    var eventId = gerarEventId();
    var o = obterOrigem().efetiva;

    estado.leadDisparado     = true;
    estado.eventIdUltimoLead = eventId;
    estado.origemGatilho     = gatilho;
    gravarJSON(CHAVE_LEAD, { ts: Date.now(), event_id: eventId, gatilho: gatilho },
               window.sessionStorage);

    var payload = {
      projeto:      PROJETO,
      event_id:     eventId,
      gatilho:      gatilho,
      utm_source:   o.utm_source   || '(direct)',
      utm_medium:   o.utm_medium   || '(none)',
      utm_campaign: o.utm_campaign || '(not set)',
      utm_content:  o.utm_content  || '',
      utm_term:     o.utm_term     || '',
      landing_page: o.landing_page || location.pathname
    };
    if (extras) Object.keys(extras).forEach(function (k) { payload[k] = extras[k]; });

    try {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: 'inscricao-' + PROJETO,
          content_category: PROJETO,
          value: 0, currency: 'BRL'
        }, { eventID: eventId });
      }
    } catch (e) { log('falha fbq Lead', e); }

    try {
      if (typeof window.gtag === 'function') {
        var p = { currency: 'BRL', value: 0, method: 'brevo_form' };
        Object.keys(payload).forEach(function (k) { p[k] = payload[k]; });
        window.gtag('event', 'generate_lead', p);
      }
    } catch (e) { log('falha gtag generate_lead', e); }

    try {
      var d = { event: 'lead_gerado' };
      Object.keys(payload).forEach(function (k) { d[k] = payload[k]; });
      window.dataLayer.push(d);
    } catch (e) { log('falha dataLayer push', e); }

    log('LEAD disparado', payload);
    return true;
  }

  /* ───────────────── detecção do sucesso do Brevo ───────────────── */
  function visivel(el) {
    if (!el) return false;
    var cs = getComputedStyle(el);
    if (el.offsetParent === null && cs.position !== 'fixed') return false;
    var r = el.getBoundingClientRect();
    return r.height > 0 && r.width > 0 && cs.visibility !== 'hidden';
  }

  function algumSucessoVisivel() {
    for (var i = 0; i < C.SELETORES_SUCESSO.length; i++) {
      var els = document.querySelectorAll(C.SELETORES_SUCESSO[i]);
      for (var j = 0; j < els.length; j++) if (visivel(els[j])) return C.SELETORES_SUCESSO[i];
    }
    return null;
  }

  /* Se um painel de sucesso JÁ estiver visível no load (CSS do embed,
     cache), ele não vale como gatilho — senão o Lead dispara sozinho. */
  function fotografarEstadoInicial() {
    C.SELETORES_SUCESSO.forEach(function (s) {
      var els = document.querySelectorAll(s), vis = false;
      for (var i = 0; i < els.length; i++) if (visivel(els[i])) vis = true;
      estado.sucessoVisivelNoInicio[s] = vis;
    });
    log('estado inicial dos painéis', estado.sucessoVisivelNoInicio);
  }

  function checarSucesso() {
    var sel = algumSucessoVisivel();
    if (!sel) return;
    if (estado.sucessoVisivelNoInicio[sel]) return;
    dispararLead('dom-sucesso');
  }

  function observarBrevo() {
    if (estado.observerAtivo || !window.MutationObserver) return;
    var alvo = document.querySelector('.sib-form') ||
               document.querySelector('[id^="sib-form"]') || document.body;
    var agendado = false;
    new MutationObserver(function () {
      if (agendado) return;
      agendado = true;
      setTimeout(function () { agendado = false; checarSucesso(); }, 60);
    }).observe(alvo, {
      childList: true, subtree: true, attributes: true,
      attributeFilter: ['style', 'class', 'hidden', 'aria-hidden']
    });
    estado.observerAtivo = true;
    log('MutationObserver ativo em', alvo);
  }

  function ligarSubmit() {
    document.addEventListener('submit', function (ev) {
      var form = ev.target;
      if (!form || form.tagName !== 'FORM') return;
      var ehBrevo = (form.closest && form.closest('.sib-form')) ||
                    /sib/i.test(form.id || '') ||
                    (form.action && /sibforms\.com/.test(form.action));
      if (!ehBrevo) return;

      preencherCamposBrevo(form);
      estado.formSubmetido = true;
      log('submit Brevo capturado');

      /* Alguns temas escondem o form em vez de mostrar painel.
         12s depois: se sumiu e não há erro na tela, foi sucesso. */
      setTimeout(function () {
        if (estado.leadDisparado) return;
        var erro = C.SELETORES_ERRO.some(function (s) { return visivel(document.querySelector(s)); });
        if (erro) { log('erro do Brevo visível — não dispara'); return; }
        if (!visivel(form)) dispararLead('form-sumiu'); else checarSucesso();
      }, 12000);
    }, true);
  }

  /* ───────────────── consentimento: API pro banner ───────────────── */
  function concederConsentimento(opcoes) {
    var o = opcoes || {};
    var analytics = o.analytics !== false;
    var anuncios  = o.anuncios  !== false;
    try {
      window.gtag('consent', 'update', {
        'ad_storage':              anuncios  ? 'granted' : 'denied',
        'ad_user_data':            anuncios  ? 'granted' : 'denied',
        'ad_personalization':      anuncios  ? 'granted' : 'denied',
        'analytics_storage':       analytics ? 'granted' : 'denied',
        'personalization_storage': anuncios  ? 'granted' : 'denied'
      });
    } catch (e) { log('falha consent update', e); }
    try { if (window.fbq) window.fbq('consent', anuncios ? 'grant' : 'revoke'); } catch (e) {}
    gravarJSON('afk_consentimento', { ts: Date.now(), analytics: analytics, anuncios: anuncios });
    try { window.dataLayer.push({ event: 'consentimento_atualizado', analytics: analytics, anuncios: anuncios }); } catch (e) {}
    log('consentimento', { analytics: analytics, anuncios: anuncios });
  }
  function negarConsentimento() { concederConsentimento({ analytics: false, anuncios: false }); }
  function restaurarConsentimento() {
    var c = lerJSON('afk_consentimento');
    if (!c) return;
    if ((Date.now() - c.ts) > (180 * 24 * 60 * 60 * 1000)) return;   // 6 meses
    concederConsentimento({ analytics: c.analytics, anuncios: c.anuncios });
  }

  /* ───────────────── diagnóstico ───────────────── */
  function rastreioStatus() {
    var org = obterOrigem();
    var leadSessao = lerJSON(CHAVE_LEAD, window.sessionStorage);
    var campos = {};
    Object.keys(C.CAMPOS_BREVO).forEach(function (k) {
      var el = document.querySelector(C.CAMPOS_BREVO[k]);
      campos[k] = el ? (el.value || '(vazio)') : 'CAMPO NÃO ENCONTRADO';
    });
    return {
      projeto: PROJETO,
      ga4: {
        id: C.GA4_ID,
        gtagDefinido: typeof window.gtag === 'function',
        scriptCarregado: !!document.querySelector('script[src*="googletagmanager.com/gtag/js"]'),
        dataLayerItens: (window.dataLayer || []).length
      },
      meta: {
        id: C.META_PIXEL_ID,
        fbqDefinido: typeof window.fbq === 'function',
        fbqCarregado: !!(window.fbq && window.fbq.loaded),
        scriptCarregado: !!document.querySelector('script[src*="fbevents.js"]')
      },
      gtm: { id: C.GTM_ID || '(não configurado)' },
      consentimento: lerJSON('afk_consentimento') || '(nenhuma escolha registrada)',
      origem: { firstTouch: org.first, lastTouch: org.last, efetiva: org.efetiva, ttlDias: C.UTM_TTL_DIAS },
      formulario: {
        formsBrevoNaPagina: document.querySelectorAll('.sib-form form, form[action*="sibforms.com"]').length,
        camposEscondidos: campos,
        observerAtivo: estado.observerAtivo,
        submitCapturado: estado.formSubmetido,
        painelSucessoVisivel: algumSucessoVisivel() || false,
        painelJaVisivelNoLoad: estado.sucessoVisivelNoInicio
      },
      lead: {
        disparadoNestaSessao: !!(estado.leadDisparado || leadSessao),
        eventId: estado.eventIdUltimoLead || (leadSessao && leadSessao.event_id) || null,
        gatilho: estado.origemGatilho || (leadSessao && leadSessao.gatilho) || null
      }
    };
  }

  /* ───────────────── inicialização ───────────────── */
  function iniciar() {
    persistirOrigem();
    restaurarConsentimento();
    fotografarEstadoInicial();
    preencherCamposBrevo();
    ligarSubmit();
    observarBrevo();
    /* O widget do Brevo injeta o form depois do DOMContentLoaded.
       Repassa os campos por 10s. */
    var n = 0, t = setInterval(function () {
      n++; preencherCamposBrevo();
      if (!estado.observerAtivo) observarBrevo();
      if (n >= 10) clearInterval(t);
    }, 1000);
  }

  window.rastreioLead          = function (extras) { return dispararLead('manual', extras); };
  window.concederConsentimento = concederConsentimento;
  window.negarConsentimento    = negarConsentimento;
  window.__rastreioStatus      = rastreioStatus;
  window.__rastreioOrigem      = obterOrigem;
  window.__rastreioPreencher   = preencherCamposBrevo;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
