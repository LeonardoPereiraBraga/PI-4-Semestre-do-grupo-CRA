import "./Autoridades.css";
function Autoridades() {
  return (
    <>
      <section id="secao-contato-autoridades">
        <div className="bloco-contato-autoridades">
          <h1 className="titulo-contato-autoridades">
            Contato com Autoridades
          </h1>
          <p className="texto-intro-contato">
            Acesse rapidamente números e canais oficiais da polícia e conselhos
            tutelares.
            <br />
            Em casos de desaparecimento de crianças e adolescentes, agir rápido
            é essencial. Use os contatos abaixo para denúncia, registro de
            ocorrência ou orientação imediata.
          </p>

          <div className="grade-contatos-urgentes">
            <div className="item-contato">
              <h2 className="titulo-contato">📞 Disque 100</h2>
              <p className="descricao-contato">
                Canal de denúncias de violações de direitos humanos. Atende 24h,
                gratuitamente e de forma anônima.
              </p>
              <p className="info-contato">
                Ligue para <strong>100</strong>
              </p>
            </div>

            <div className="item-contato">
              <h2 className="titulo-contato">🚓 Polícia Militar - 190</h2>
              <p className="descricao-contato">
                Emergências imediatas envolvendo desaparecimentos. Atendimento
                em tempo real.
              </p>
              <p className="info-contato">
                Ligue para <strong>190</strong>
              </p>
            </div>

            <div className="item-contato">
              <h2 className="titulo-contato">🔍 Disque Denúncia - 181</h2>
              <p className="descricao-contato">
                Canal anônimo para repassar informações sobre desaparecidos ou
                suspeitas.
              </p>
              <p className="info-contato">
                Ligue para <strong>181</strong>
              </p>
            </div>

            <div className="item-contato">
              <h2 className="titulo-contato">👶 Conselhos Tutelares</h2>
              <p className="descricao-contato">
                Responsáveis por garantir os direitos de crianças e
                adolescentes. Verifique o contato da sua cidade.
              </p>
              <p className="info-contato">
                Consulte o Conselho Tutelar da sua região
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Autoridades;
