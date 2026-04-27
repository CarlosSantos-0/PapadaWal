import styles from '../Footer/styles.module.css'

function Footer() {
  return (
    <footer className={styles["site-footer"]}>
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
              <a href="index.html">Página Inicial</a>
            </li>
            <li>
              <a href="produtos.html">Produtos</a>
            </li>
            <li>
              <a href="sobre.html">Sobre</a>
            </li>
          </ul>
        </div>

        <div className={styles["footer-col"]}>
          <h3>Contatos</h3>
          <ul className={styles["social-links"]}>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i> (11) 95769-7500
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/papadawall/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i> @papadawall
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className={styles["footer-bottom"]}>
        <p>&copy; 2025 Papa da Wall. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;