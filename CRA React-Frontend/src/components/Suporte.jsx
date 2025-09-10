import "./Suporte.css";
function Suporte() {
  return (
    <>
      <div className="pagina-suporte">
        <h1>Precisa de ajuda ou quer falar com a gente?</h1>

        <p id="texto-introducao">
          Se você tem dúvidas mais específicas, precisa de suporte jurídico,
          quer relatar um problema técnico ou entender como colaborar com a
          nossa plataforma, estamos aqui para ajudar. <br />
          <br />A <strong>Child Rescue Alert</strong> entende que cada caso é
          único e que algumas situações exigem atenção especial. Por isso,
          disponibilizamos um canal dedicado para suporte e contato direto com
          nossa equipe.
        </p>

        <div className="secao-faq">
          <h2>Perguntas Frequentes</h2>

          <div className="item-faq">
            <h3>Como posso relatar o desaparecimento de alguém?</h3>
            <p>
              Você pode usar nosso formulário de denúncia presente na página
              contato ou entrar em contato diretamente com nossa equipe por meio
              do e-mail{" "}
              <a href="mailto:suporte@childrescuealert.org">
                suporte@childrescuealert.org
              </a>
              . As informações devem incluir nome completo, idade, data e local
              do desaparecimento, além de uma foto recente, se possível.
            </p>
          </div>

          <div className="item-faq">
            <h3>Oferecem suporte jurídico?</h3>
            <p>
              Sim. Oferecemos suporte jurídico básico e encaminhamentos para
              instituições parceiras, quando necessário. Nosso time está
              preparado para orientar famílias sobre os primeiros passos legais
              após um desaparecimento.
            </p>
          </div>

          <div className="item-faq">
            <h3>
              Estou enfrentando um problema técnico no site. O que devo fazer?
            </h3>
            <p>
              Caso esteja com dificuldades técnicas, como falhas no
              carregamento, formulário com erro ou problemas de login, envie uma
              descrição detalhada para{" "}
              <a href="mailto:suporte@childrescuealert.org">
                suporte@childrescuealert.org
              </a>
              . Nossa equipe técnica verificará o mais rápido possível.
            </p>
          </div>

          <div className="item-faq">
            <h3>Como posso colaborar com a Child Rescue Alert?</h3>
            <p>
              Você pode ajudar de várias formas! Algumas maneiras de colaborar
              incluem:
            </p>
            <ul>
              <li>
                <strong>Denúncias anônimas:</strong> Se você souber de alguma
                criança ou adolescente desaparecido e não puder se identificar,
                você pode fazer uma denúncia anônima através do nosso formulário
                presente na página <a href="vialguem.html">Ví Alguem.</a> Sua
                contribuição é vital para a nossa missão.
              </li>
              <li>
                <strong>Divulgação de casos:</strong> Ajude a compartilhar
                informações sobre casos de desaparecimentos. A divulgação de
                fotos e dados pode ser essencial para encontrar a pessoa
                desaparecida mais rapidamente.
              </li>
              <li>
                <strong>Suporte financeiro:</strong> Contribua com a nossa causa
                através de doações. Seus recursos ajudam a manter a plataforma
                funcionando e a ampliar o alcance das nossas operações.
              </li>
              <li>
                <strong>Voluntariado:</strong> Você também pode se tornar um
                voluntário. Envolva-se na causa ajudando a coordenar campanhas
                ou em atividades administrativas.
              </li>
            </ul>
            <p>
              Mesmo sem dinheiro, sua ajuda pode ser muito valiosa! Entre em
              contato conosco para saber como você pode se envolver. Estamos
              prontos para te orientar e encontrar a melhor forma de
              colaboração.
            </p>
          </div>
        </div>

        <div className="secao-contato">
          <h2>Fale com a equipe do CRA</h2>
          <p>
            Se a página de perguntas frequentes não respondeu à sua dúvida ou se
            você tem uma questão mais complexa, nossa equipe está à disposição
            para ajudar. <br />
            Envie uma mensagem personalizada com sua dúvida ou situação. <br />
            <strong>
              Nosso time está pronto para te ouvir e fornecer a assistência
              necessária.
            </strong>
          </p>

          <input
            id="campoinforma2"
            type="text"
            placeholder="Digite sua dúvida em detalhes..."
          />
          <br />
          <button type="submit" className="btn-enviar">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default Suporte;
