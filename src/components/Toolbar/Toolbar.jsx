import styles from './styles.module.css'

function Toolbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.noBullets}>
          <li>
            <a href="index.html">
              <i className="fa-sharp-duotone fa-solid fa-spa"></i>
            </a>
          </li>
          <li>
            <a href="index.html">Página inicial</a>
          </li>
          <li>
            <a href="produtos.html">Produtos</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className={styles.noBullets}>
          <li>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Buscar..."
              className={styles.search}
            />
          </li>
          <li>
            <a href="sobre.html">Sobre</a>
          </li>
          <li>
            <a id="btn-user">
              <i className="fa-regular fa-user"></i>
            </a>
          </li>
          <li>
            <a id="btn-cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Toolbar