import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <h2>Meus contatos</h2>
      <div>
        <div className={styles.line}>
          <BsWhatsapp className={styles.zapIcon} />
          <p>(11) 94523-8835</p>
        </div>
        <div className={styles.line}>
          <AiOutlineMail className={styles.mailIcon} />
          <p>marcos_falcade1@hotmail.com</p>
        </div>
        <div className={styles.line}>
          <a href="https://www.linkedin.com/in/marcos-vinicios-arcie-falcade-a727b4262/" target="_blank">
            <BsLinkedin className={styles.mailIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;