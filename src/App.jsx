import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main';
import Section from './components/Section';
import Works from './components/Works';
import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Section />
      <Works />
      <Contact />
      <Footer />  
      <Link smooth to="#main" ><AiOutlineArrowUp className={styles.botao} /></Link>
    </div>
  )
}

export default App;
