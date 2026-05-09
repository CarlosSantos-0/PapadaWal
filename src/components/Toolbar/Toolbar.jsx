import styles from './styles.module.css'

//Importe icones aqui
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiFlowerLotusBold } from "react-icons/pi";

function Toolbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.noBullets}>
          <li>
            <a href="index.html">
                <PiFlowerLotusBold size={50}/>
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
              <FaRegUserCircle size={25}/>
            </a>
          </li>
          <li>
            <a id="btn-cart">
              <FaShoppingCart size={25}/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Toolbar