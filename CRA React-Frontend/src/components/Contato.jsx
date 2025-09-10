import "./Contato.css";
function Contato() {
  return (
    <>
      <div className="CaixaPesquisa">
        <h1>Contato e Suporte ao Usuário</h1>

        <p>Como podemos ajudar?</p>
        <input
          type="text"
          id="campoAjuda"
          placeholder="Digite sua dúvida ou sugestão..."
        />
      </div>

      <p id="contatoP">Procurar por categoria</p>

      <div className="container">
        <div className="card">
          <img src="Contato.jpg" alt="Registrar Desaparecimento" />
          <h3>Registrar Desaparecimento</h3>
          <p>Envie as informações da criança ou adolescente desaparecido.</p>
          <a href="informardesaparecido">Registrar</a>
        </div>

        <div className="card">
          <img src="Contato1.jpg" alt="Contato com Autoridades" />
          <h3>Contato com Autoridades</h3>
          <p>
            Acesse rapidamente números e canais oficiais da polícia e conselhos
            tutelares.
          </p>
          <a href="/autoridades">Ver contatos</a>
        </div>

        <div className="card">
          <img src="Contato2.svg" alt="Denúncia Anônima" />
          <h3>Denúncia Anônima</h3>
          <p>
            Envie informações de forma segura e anônima sobre possíveis casos.
          </p>
          <a href="/informardesaparecido">Denunciar</a>
        </div>
      </div>

      <main className="contentcentral2">
        <div className="contentprincipal2">
          <h1 id="TituloContent2">Contatar o CRA - Child Rescue Alert</h1>

          <h2 id="TituloContent2C" className="espacoemcima">
            Precisa de ajuda ou quer falar com a gente?
          </h2>

          <p>
            Se você tem dúvidas mais específicas, precisa de suporte jurídico,
            quer relatar um problema técnico ou entender como colaborar com a
            nossa plataforma, estamos aqui para ajudar.
          </p>
          <br />

          <p>
            A <strong>Child Rescue Alert</strong> entende que cada caso é único
            e que algumas situações exigem atenção especial. Por isso,
            disponibilizamos um canal dedicado para suporte e contato direto com
            nossa equipe.
          </p>

          <section className="contato-suporte">
            <h3>Fale com a equipe do CRA</h3>
            <p>
              Visite nossa página de suporte para encontrar respostas às dúvidas
              mais frequentes ou nos envie uma mensagem personalizada. Nosso
              time está pronto para te ouvir.
            </p>
            <a href="/suporte" className="botao-suporte">
              Ir para a página de suporte
            </a>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contato;
