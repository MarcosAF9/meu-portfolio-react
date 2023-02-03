import styles from './WorkCards.module.css';

function WorkCards({ title, linkProjeto, linkCodigo, image }) {
    return (
        <div className={styles.cards}>
            <h3>{title}</h3>
            <img src={image} alt="projeto" />
            <div className={styles.buttons}>
                <a href={linkProjeto} target="_blank">
                    <button className={styles.verProjeto}>Ver projeto</button>
                </a>
                <a href={linkCodigo} target="_blank">
                    <button className={styles.verCodigo}>Ver código</button>
                </a>
            </div>
        </div>
    )
}

export default WorkCards;