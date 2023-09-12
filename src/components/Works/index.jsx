import styles from "./Works.module.css";
import WorkCards from "../WorkCards";
import { projects } from "./projects.js";

function Works() {
  return (
    <div className={styles.works} id="works">
      <h2>Meus Projetos</h2>
      <div className={styles.list}>
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
