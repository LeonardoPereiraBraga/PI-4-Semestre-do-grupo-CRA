import styles from "./Footer.module.css";
import InformarDesaparecido from "./InformarDesaparecido";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerContacts}>
            <h1>
              <img
                className={styles.logocra}
                src="/logocra.svg"
                alt="Logo CRA"
              />
            </h1>
            <p>Child Rescue Alert</p>

            <div className={styles.footerSocialMedia}>
              <a
                href="#"
                className={`${styles.footerLink} ${styles.instagram}`}
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className={`${styles.footerLink} ${styles.facebook}`}>
                <i className="bx bxl-facebook"></i>
              </a>

              <a href="#" className={`${styles.footerLink} ${styles.whatsapp}`}>
                <i className="bx bxl-whatsapp"></i>
              </a>
            </div>
          </div>

          <ul className={styles.footerList}>
            <li>
              <h3>Informativos</h3>
            </li>
            <li>
              <a href="/suporte" className={styles.footerLink}>
                Contribuir
              </a>
            </li>
            <li>
              <a href="/suporte" className={styles.footerLink}>
                Suporte ao usuário
              </a>
            </li>
            <li>
              <a href="/suporte" className={styles.footerLink}>
                Políticas de privacidade
              </a>
            </li>
          </ul>

          <ul className={styles.footerList}>
            <li>
              <h3>Soluções</h3>
            </li>
            <li>
              <a href="/suporte" className={styles.footerLink}>
                App
              </a>
            </li>
            <li>
              <a href="/suporte" className={styles.footerLink}>
                Desktop
              </a>
            </li>
            <li>
              <a href="/suporte" className={styles.footerLink}>
                Nuvem
              </a>
            </li>
          </ul>

          <div className={styles.footerSubscribe}>
            <h3>Inscrição</h3>
            <p>Entre com o seu email para receber notícias e atualizações</p>

            <div className={styles.inputGroup}>
              <input type="email" id={styles.email} />
              <button>
                <i className="bx bx-envelope"></i>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.direitos}>
          O CRA (Children Rescue Alert) é uma plataforma desenvolvida para
          facilitar a comunicação e colaboração da comunidade no combate ao
          desaparecimento de crianças e adolescentes. // As informações
          publicadas e os alertas são compartilhados de forma colaborativa, mas
          a plataforma não pode garantir a localização ou o resgate imediato das
          pessoas envolvidas. // O desempenho e a eficácia da plataforma podem
          variar dependendo do uso e da configuração. // Ao utilizar a
          plataforma, você concorda com nossos Termos de Uso e Política de
          Privacidade. // A plataforma CRA compromete-se a respeitar os direitos
          humanos e a promover a segurança e o bem-estar de crianças e
          adolescentes em todas as suas ações. Consulte os Princípios de
          Direitos Humanos do CRA.
        </div>

        <div className={styles.footerCopyright}>
          &#169; 2025 Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}

export default Footer;
