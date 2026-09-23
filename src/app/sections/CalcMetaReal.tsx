// Calculadora da Meta Real — portada do pacote LP-v2-joao (v2.6, "a calculadora fica
// calculando"). Substitui o antigo CalcDemo (estático, um cenário só). Agora o cartão
// RECALCULA em ciclo, trocando de cenário na frente da pessoa — ligado por
// iniciarInteracoes() -> montarCalc() (src/app/lib/interacoes.js), chamado em App.tsx.
//
// O HTML já entrega o primeiro cenário completo e coerente (R$ 120 / Guarulhos,SP /
// 8h·R$40 / R$ 160 / R$ 20) — sem JS, ou com prefers-reduced-motion, a calculadora
// aparece pronta, nunca "R$ 0". CSS em src/styles/lp-v2.css (.calc*).
export default function CalcMetaReal() {
  return (
    <div className="lp-v2 w-full max-w-[360px]">
      <div
        className="calc"
        data-calc
        role="img"
        aria-label="Demonstração da Calculadora da Meta Real: a pessoa informa quanto quer
          levar pra casa, onde roda, quantas horas e quanto gasta, e a ferramenta mostra a
          meta real no bruto e por hora. Os valores mostrados são exemplos."
      >
        <p className="calc__titulo">
          Calculadora da Meta Real
          <span className="calc__pisca" aria-hidden="true" />
        </p>

        <div className="calc__campo">
          <span className="calc__rot">Levar pra casa</span>
          <span className="calc__val" data-campo="meta">
            R$ 120
          </span>
        </div>
        <div className="calc__campo">
          <span className="calc__rot">Onde você roda</span>
          <span className="calc__val" data-campo="local">
            Guarulhos, SP
          </span>
        </div>
        <div className="calc__campo">
          <span className="calc__rot">Horas · gasto</span>
          <span className="calc__val" data-campo="jornada">
            8h · R$ 40
          </span>
        </div>

        <div className="calc__resultado">
          <span className="calc__rot">Sua meta real</span>
          <p className="calc__bruto">
            <span data-conta="160" data-prefixo="R$ ">
              R$ 160
            </span>
            <small>no bruto</small>
          </p>
          <p className="calc__hora">
            <span data-conta="20" data-prefixo="R$ ">
              R$ 20
            </span>{" "}
            por hora
          </p>
        </div>

        {/* linha de tempo até o próximo cálculo */}
        <div className="calc__ciclo" aria-hidden="true">
          <span />
        </div>
      </div>
      <p className="calc__nota" style={{ color: "#5b616f", fontSize: 13, lineHeight: 1.55, margin: "16px 0 22px" }}>
        Só um exemplo. Na ferramenta você põe os seus números e ela calcula os seus.
      </p>
    </div>
  );
}
