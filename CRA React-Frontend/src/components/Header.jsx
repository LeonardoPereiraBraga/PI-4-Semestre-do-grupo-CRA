import { useState } from "react";
import styles from "./Header.module.css";

function Header({ ativo }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <a href="/home">
        <img className={styles.logocra} src="/logocra.svg" alt="Logo CRA" />
      </a>

      <ul className={styles.navbar}>
        <li>
          <a href="/home" className={ativo === 1 ? styles.active : ""}>
            Desaparecidos
          </a>
        </li>
        <li>
          <a
            href="/atualizacaocasos"
            className={ativo === 2 ? styles.active : ""}
          >
            Atualizações dos Casos
          </a>
        </li>
        <li>
          <a href="/contato" className={ativo === 3 ? styles.active : ""}>
            Contato
          </a>
        </li>
        <li>
          <a
            href="/informardesaparecido"
            className={ativo === 4 ? styles.active : ""}
          >
            Ví Alguém
          </a>
        </li>
        <li>
          <a href="/suporte" className={ativo === 5 ? styles.active : ""}>
            Suporte
          </a>
        </li>
      </ul>

      <div className={styles.main}>
        <a href="#" className={styles.usuario}>
          <i className="bx bx-user" style={{ color: "#104559" }}></i>
        </a>
        <a href="#" className={styles.usuario}>
          <i className="bx bx-world" style={{ color: "#104559" }}></i>
        </a>
        <div
          className={
            isOpen
              ? `bx bx-menu ${styles.menuIcon} open`
              : `bx bx-menu ${styles.menuIcon}`
          }
          onClick={() => setIsOpen(true)}
        ></div>
      </div>
    </header>
  );
}

export default Header;
