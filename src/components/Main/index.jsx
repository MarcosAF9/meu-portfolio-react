import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { HashLink as Link } from 'react-router-hash-link';
import foto from '../../assets/foto-perfil-bg.png';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main} id="main">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>Olá,</p>
                        <h2>Meu nome é Marcos</h2>
                        <p>Sou desenvolvedor Front-end</p>

                        <div className={styles.icons}>
                            <a href="https://www.linkedin.com/in/marcos-vinicios-arcie-falcade-a727b4262/" target="_blank">
                                <BsLinkedin className={styles.icon} />
                            </a>
                        </div>

                        <div className={styles.buttons}>
                            <Link smooth to="#works">Meus projetos</Link>
                            <Link smooth to="#contact">Fale comigo</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.image}>
                    <img src={foto} alt="minha foto" />
                </div>
            </div>
        </div>
    )
}

export default Main;