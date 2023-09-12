import styles from "./Works.module.css";
import WorkCards from "../WorkCards";
import { projects } from "./projects.js";

function Works() {
  return (
    <div className={styles.works} id="works">
      <h2>Meus Projetos</h2>
      <div className={styles.list}>
        {/* <div className={styles.cards}>
                    <h3>Tema escuro / Tema claro</h3>
                    <a href="https://social-linking-kappa.vercel.app/" target="_blank">
                        <img src={foto1} alt="projeto" />
                        <button>Ver projeto</button>
                    </a>
                </div>
                <div className={styles.cards}>
                    <h3>Calculadora em Javascript</h3>
                    <a href="https://calculadora-six-flame.vercel.app/" target="_blank">
                        <img src={foto2} alt="projeto" />
                        <button>Ver projeto</button>
                    </a>
                </div>
                <div className={styles.cards}>
                    <h3>Site Parallax</h3>
                    <a href="https://site-parallax-sand.vercel.app/" target="_blank">
                        <img src={foto3} alt="projeto" />
                        <button>Ver projeto</button>
                    </a>
                </div>
                <div className={styles.cards}>
                    <h3>Cronômetro em Javascript</h3>
                    <a href="https://cronometro-black.vercel.app/" target="_blank">
                        <img src={foto4} alt="projeto" />
                        <button>Ver projeto</button>
                    </a>
                </div>
                <div className={styles.cards}>
                    <h3>Página de Login Rocketseat</h3>
                    <a href="https://login-page-rocketseat.vercel.app/" target="_blank">
                        <img src={foto5} alt="projeto" />
                        <button>Ver projeto</button>
                    </a>
                </div>
                <div className={styles.cards}>
                    <h3>Desafio NLW e-Sports Rocketseat</h3>
                    <a href="https://nlw-e-sports-plum.vercel.app/" target="_blank">
                        <img src={foto6} alt="projeto" />
                        <button>Ver projeto</button>
                    </a>
                </div> */}

        {projects.map((projeto) => (
          <WorkCards
            image={projeto.image}
            linkProjeto={projeto.linkProjeto}
            linkCodigo={projeto.linkCodigo}
            title={projeto.title}
            key={projeto.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
