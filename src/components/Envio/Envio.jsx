import styles from '../Envio/styles.module.css'

//Router
import { Link } from 'react-router-dom';

function Envio() {

    return (
        <>
            <div className={styles.botao_atalho}>
                <Link to="/produtos" className={styles.atalho_produtos}>Faça seu pedido agora!!</Link>
            </div>
        </>
    )
}

export default Envio;