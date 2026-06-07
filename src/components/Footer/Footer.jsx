import styles from '../Footer/styles.module.css'

// Router
import { Link, useLocation } from 'react-router-dom';

//Icones
import { FaHome } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { FaComment } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const location = useLocation();
  const isAdmPage = location.pathname.startsWith('/adm');

  return (  
    <footer className={`${styles["site-footer"]} ${isAdmPage ? styles["no-margin"] : ""}`}>
      <div className={styles["footer-container"]}>

        <div className={styles["footer-col"]}>
          <h3>Papa da Wal</h3>
          <p>
            Saúde e sabor entregues na sua porta. A melhor opção de marmitas em Bragança Paulista.
          </p>
        </div>

        <div className={styles["footer-col"]}>
          <h3>Acesso Rápido</h3>
          <ul className={styles["footer-links"]}>
            <li>
              <Link to="/"><FaHome /> Página Inicial</Link>
            </li>
            <li>
              <Link to="/produtos"><GiKnifeFork /> Produtos</Link>
            </li>
            <li>
              <Link to="/sobre"><FaComment /> Sobre</Link>
            </li>
          </ul>
        </div>

        <div className={styles["footer-col"]}>
          <h3>Contatos</h3>
          <ul className={styles["social-links"]}>
            <li className={styles.iconeRedes}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24}/>
                (11) 95769-7500
              </a>
            </li>
            <li className={styles.iconeRedes}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24}/>
                @papadawall
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className={styles["footer-bottom"]}>
        <p>&copy; {new Date().getFullYear()} Papa da Wall. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;