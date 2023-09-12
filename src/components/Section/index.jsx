import foto from "../../assets/foto-perfil.jpg";
import styles from "./Section.module.css";

function Section() {
  return (
    <div className={styles.section} id="technologies">
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={foto} alt="minha foto" />
        </div>
        <div className={styles.content}>
          <h2>Tecnologias que estudo</h2>
          <p>Javascript</p>
          <p>Nextjs</p>
          <p>NodeJs</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>GIT</p>
        </div>
      </div>
    </div>
  );
}

export default Section;
