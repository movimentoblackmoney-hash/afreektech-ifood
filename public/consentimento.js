/* =============================================================================
   consentimento.js — aviso de cookies (LGPD) das LPs Afreektech
   Carregar DEPOIS do rastreio.js.

   Por que existe: o rastreio.js começa com o consentimento NEGADO (é o certo).
   Sem este aviso, ninguém chama concederConsentimento() — o pixel do Meta fica
   em 'revoke' e nunca envia o Lead, e o GA4 roda sem cookies.

   - Aparece só para quem ainda não escolheu (a escolha vale 6 meses, mesma
     regra do rastreio.js, mesma chave 'afk_consentimento').
   - "Aceitar" e "Só o essencial" têm o mesmo tamanho e o mesmo peso de clique.
   - Não bloqueia a página, não cobre o formulário, some sozinho após a escolha.
   ========================================================================== */
(function () {
  'use strict';

  var CONFIG = {
    // Mesma URL de Termos/Política já usada no InscricaoModal (LEGAL_URL).
    POLITICA_URL: 'https://movimentoblackmoneyenterprise.ac-page.com/mbmpotiticadedados',
    CHAVE: 'afk_consentimento',
    VALIDADE_DIAS: 180
  };

  function escolhaValida() {
    try {
      var b = localStorage.getItem(CONFIG.CHAVE);
      if (!b) return false;
      var c = JSON.parse(b);
      return c && c.ts && (Date.now() - c.ts) < CONFIG.VALIDADE_DIAS * 864e5;
    } catch (e) { return false; }   // storage bloqueado: mostra o aviso
  }

  function montar() {
    if (escolhaValida() || document.getElementById('afk-cookies')) return;

    var css = document.createElement('style');
    css.textContent =
      '#afk-cookies{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:460px;' +
      'background:rgba(18,34,51,.97);color:#fff;border:1px solid rgba(234,29,44,.45);border-radius:12px;' +
      'padding:18px 20px;font:14px/1.5 Archivo,system-ui,-apple-system,"Segoe UI",sans-serif;' +
      'box-shadow:0 20px 60px rgba(0,0,0,.5);transform:translateY(0);transition:transform .3s,opacity .3s}' +
      '#afk-cookies.is-saindo{opacity:0;transform:translateY(20px)}' +
      '#afk-cookies p{margin:0 0 14px;color:#d5d5be}' +
      '#afk-cookies a{color:#ff6b75}' +
      '#afk-cookies .afk-c-botoes{display:flex;gap:10px}' +
      '#afk-cookies button{flex:1;min-height:44px;border-radius:8px;font:700 14px Archivo,system-ui,sans-serif;cursor:pointer}' +
      '#afk-cookies .afk-c-sim{background:#ea1d2c;color:#fff;border:1px solid #ea1d2c}' +
      '#afk-cookies .afk-c-nao{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.5)}' +
      '#afk-cookies button:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
      '@media (prefers-reduced-motion:reduce){#afk-cookies{transition:none}}';
    document.head.appendChild(css);

    var box = document.createElement('div');
    box.id = 'afk-cookies';
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', 'Aviso de cookies');
    box.innerHTML =
      '<p>Usamos cookies para medir o alcance da campanha e saber quais canais trazem ' +
      'mais alunos. Você escolhe. <a href="' + CONFIG.POLITICA_URL + '" target="_blank" rel="noopener">' +
      'Política de privacidade</a>.</p>' +
      '<div class="afk-c-botoes">' +
      '<button type="button" class="afk-c-nao">Só o essencial</button>' +
      '<button type="button" class="afk-c-sim">Aceitar</button>' +
      '</div>';
    document.body.appendChild(box);

    function fechar() {
      box.classList.add('is-saindo');
      setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 320);
    }
    box.querySelector('.afk-c-sim').addEventListener('click', function () {
      if (typeof window.concederConsentimento === 'function') window.concederConsentimento();
      fechar();
    });
    box.querySelector('.afk-c-nao').addEventListener('click', function () {
      if (typeof window.negarConsentimento === 'function') window.negarConsentimento();
      fechar();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar);
  else montar();
})();
