import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Header.module.css";

function Header() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className={styles.header}>
      <nav
        className={
          active ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
        }
        id="menu"
      >
        <ul>
          <div className={styles.closed}>
            <AiOutlineClose className={styles.close} onClick={showMenu} />
          </div>
          <li>
            <Link smooth to="#technologies" className={styles.links}>
              Tecnologias
            </Link>
          </li>
          <li>
            <Link smooth to="#works" className={styles.links}>
              Meus Projetos
            </Link>
          </li>
          <li>
            <Link smooth to="#contact" className={styles.links}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.changer}>
        <AiOutlineMenu className={styles.menu} onClick={showMenu} />
      </div>
    </div>
  );
}

export default Header;
