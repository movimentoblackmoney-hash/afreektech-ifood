// Portado do pacote LP-v2-joao (seção nova #professores, ver LEIA-ME-joao.md). Copy
// verbatim. Coverflow giratório — geometria e autoplay ligados por
// iniciarInteracoes() -> montarCoverflow() (src/app/lib/interacoes.js), chamada em
// App.tsx. CSS em src/styles/lp-v2.css (.cover*).

type Professor = {
  sigla: string;
  foto: string;
  nome: string;
  area: string;
  cred: string;
};

const PROFESSORES: Professor[] = [
  {
    sigla: "CJ",
    foto: "/professores/carla-jemima.jpg",
    nome: "Carla Jemima",
    area: "Gestão e negócios",
    cred: "Gestão de Projetos (PO · PM) e mentora de negócios",
  },
  {
    sigla: "PO",
    foto: "/professores/pablo-oliver.jpg",
    nome: "Pablo Oliver",
    area: "Filosofia e dinheiro",
    cred: "Professor de filosofia e assessor de investimentos",
  },
  {
    sigla: "TP",
    foto: "/professores/talita-peixoto.jpg",
    nome: "Talita Peixoto",
    area: "Impacto e investimento",
    cred: "Impact investing, board member e professora universitária",
  },
  {
    sigla: "NV",
    foto: "/professores/nina-verso.jpg",
    nome: "Nina Verso",
    area: "Mentoria de IA",
    cred: "Mentora de IA oficial do Afreektech: tira dúvida técnica e dá retorno na hora, 24h",
  },
];

export default function Professores() {
  return (
    <section id="professores" className="lp-v2 w-full" style={{ padding: "clamp(64px,9vw,108px) 0", background: "#0c0c10" }}>
      <div className="wrap" style={{ maxWidth: 1160, marginInline: "auto", paddingInline: "clamp(20px,5vw,40px)" }}>
        <div className="faculty__head" data-anim>
          <p className="eyebrow lime is-center">Quem ensina</p>
          <h2>
            Gente que vive
            <br />
            do que está ensinando.
          </h2>
          <p className="lead">
            A diferença entre um curso e uma formação costuma estar em quem está do outro lado da
            aula. Cada frente é conduzida por alguém que faz aquilo profissionalmente — e a
            mentora de IA da plataforma fica disponível a qualquer hora.
          </p>
        </div>

        <div className="cover" tabIndex={0} role="group" aria-roledescription="carrossel" aria-label="Professores da Rota do Crescimento">
          <div className="cover__stage">
            {PROFESSORES.map((p) => (
              <button type="button" className="cover__card" key={p.sigla} aria-label={`${p.nome}, ${p.cred}`}>
                <div className="cover__mono">
                  <span>{p.sigla}</span>
                </div>
                <img
                  className="cover__photo"
                  src={p.foto}
                  alt={`Retrato de ${p.nome}`}
                  width={460}
                  height={690}
                  decoding="async"
                  onError={(e) => {
                    // sem foto: fica só o monograma (.cover__mono já está por baixo)
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="cover__veil" />
                <div className="cover__body">
                  <span className="cover__course">{p.area}</span>
                  <p className="cover__name">{p.nome}</p>
                  <p className="cover__cred">{p.cred}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="cover__nav">
          <button className="cover__arrow" type="button" data-dir="antes" aria-label="Professor anterior">
            ←
          </button>
          <div className="cover__dots" role="tablist" aria-label="Escolher professor">
            {PROFESSORES.map((p) => (
              <button className="cover__dot" type="button" aria-label={p.nome} key={p.sigla} />
            ))}
          </div>
          <button className="cover__arrow" type="button" data-dir="apos" aria-label="Próximo professor">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
