// Portado do pacote LP-v2-joao (seção nova #trilha, ver LEIA-ME-joao.md). Copy verbatim.
// Trilho arrastável — a mecânica (arrasto, botões, snap) é ligada por
// iniciarInteracoes() (src/app/lib/interacoes.js), chamada uma vez em App.tsx
// depois que a árvore monta. CSS em src/styles/lp-v2.css.

const MODULOS = [
  {
    n: "Módulo 01",
    titulo: "Seu corre tem valor",
    resumo:
      "Você sai enxergando a rua como experiência que conta: monta um currículo direto do celular e entende onde esse repertório já vale no mercado.",
  },
  {
    n: "Módulo 02",
    titulo: "Você S.A.",
    resumo:
      "Seu corre vira negócio no papel: você desenha o mapa da sua renda e descobre que a rede que já te cerca é parte do ativo.",
  },
  {
    n: "Módulo 03",
    titulo: (
      <>
        Futurofobia:
        <br />o medo do amanhã
      </>
    ),
    resumo:
      "Aquele aperto sobre o futuro tem nome e tem explicação. Você entende por que o jogo parece sempre contra — e o que dá pra fortalecer agora, sem esperar o sistema mudar.",
  },
  {
    n: "Módulo 04",
    titulo: (
      <>
        Futuros Culturais:
        <br />o futuro tem cor e território
      </>
    ),
    resumo:
      "Quem desenhou o futuro que te contaram? Você sai sabendo usar referência como poder, cultura como estratégia — e com o seu próprio mapa de futuro na mão.",
  },
  {
    n: "Módulo 05",
    titulo: (
      <>
        Automação e Algoritmos:
        <br />
        pode um robô ser racista?
      </>
    ),
    resumo:
      "Como o algoritmo decide tanta coisa, por que ele não é neutro e onde a tecnologia já errou de verdade. Fecha com IA aplicada no seu corre, hoje.",
  },
];

export default function Trilha() {
  return (
    <section id="trilha" className="lp-v2 w-full" style={{ padding: "clamp(64px,9vw,108px) 0", background: "#101014" }}>
      <div className="wrap" style={{ maxWidth: 1160, marginInline: "auto", paddingInline: "clamp(20px,5vw,40px)" }}>
        <div className="sec-head" data-anim>
          <p className="eyebrow">A trilha</p>
          <h2>
            Cinco módulos.
            <br />
            Um caminho só.
          </h2>
          <p className="lead" style={{ margin: "22px 0 0" }}>
            Do currículo ao futuro do trabalho. Cada módulo resolve uma coisa que hoje te trava —
            e você acessa pela plataforma, no celular, continuando de onde parou.
          </p>
        </div>

        <div className="rail">
          <div className="rail__track" role="group" aria-label="Módulos da trilha">
            {MODULOS.map((m) => (
              <article className="modulo" key={m.n}>
                <div className="modulo__topo">
                  <span className="modulo__n">{m.n}</span>
                </div>
                <h3>{m.titulo}</h3>
                <p className="modulo__resumo">{m.resumo}</p>
              </article>
            ))}
          </div>
          <p className="rail__dica">
            <svg className="icon" aria-hidden="true">
              <use href="#i-seta" />
            </svg>
            Arraste para o lado
          </p>
          <div className="rail__nav" hidden>
            <button className="rail__btn" type="button" data-dir="antes" aria-label="Módulo anterior">
              ←
            </button>
            <button className="rail__btn" type="button" data-dir="apos" aria-label="Próximo módulo">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
