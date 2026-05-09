import styles from './styles.module.css'


//Router
import { Link } from 'react-router-dom';

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
            <Link to="/">
              <PiFlowerLotusBold size={50}/>
            </Link>
          </li>
          <li>
            <Link to="/">Página inicial</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
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
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/log-in" id="btn-user">
              <FaRegUserCircle size={25}/>
            </Link>
          </li>
          <li>
            <Link to="/carrinho" id="btn-cart">
              <FaShoppingCart size={25}/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Toolbar