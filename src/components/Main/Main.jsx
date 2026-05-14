import styles from '../Main/styles.module.css'

//icones
import { IoIosText } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { FaRegClock, FaBox } from "react-icons/fa";

//Componentes
import Envio from '../Envio/Envio';

//Router
import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
        <div className={styles.letterBox}>
                <div className={styles.letterText}>
                <h1>Marmitas Saudáveis Feitas com Amor</h1>
                <p>Escolha entre nossos deliciosos kits prontos ou personalize sua dieta com ingredientes frescos e selecionados</p>
                </div>
                <div className={styles.letterButton}>
                    <Link to='/produtos'>Ver Cardapio</Link>
                    <Link to='/marmita'>Montar Marmita</Link>
                </div>
        </div>

        
        
        <div className={styles.main}>
            <div className={styles.heroSection}>
                <div className={styles.titulo}>
                <h1>Como funciona?</h1>
                </div>
                <p className={styles.subtitle}>
                    Escolha alguns de nossos deliciosos kits ou personalize sua dieta com ingredientes frescos.
                </p>
            </div>

            <div className={styles.opcoesContainer}>
                <div className={styles.opcaoCard}>
                    <div className={styles.opcaoHeader}>
                        <div className={styles.opcaoIcon}>
                            <FaRegClock size={20} />
                        </div>
                        <h3>Itens Prontos</h3>
                    </div>
                    <p>
                        Escolha itens do nosso cardápio fixo. Entrega em <strong>1 dia útil</strong>.
                    </p>
                    <Link to="/produtos" className={styles.opcaoBtn}>Ver Cardápio</Link>
                </div>

               
                <div className={styles.opcaoCard}> 
                    <div className={styles.opcaoHeader}>
                        <div className={styles.opcaoIcon}>
                            <FaBox size={20} />
                        </div>
                        <h3>Marmitas Personalizadas</h3>
                    </div>
                    <p>
                        Envie sua dieta e receba <strong>7 marmitas</strong> preparadas especialmente para você.
                    </p>
                    <Link to="/marmita" className={styles.opcaoBtn}>Personalizar</Link>
                </div>

            </div>

            <div className={styles.stepsContainer}>
                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-pen-to-square"><IoIosText/></i>
                    </div>
                    <h2>1. Faça seu Pedido</h2>
                    <p>
                        Envie para nós sua dieta feita por um nutricionista ou monte você mesmo.
                    </p>
                </div>

                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-truck-fast"> <MdDeliveryDining /> </i>
                    </div>
                    <h2>2. Entrega Rápida</h2>
                    <p>
                        Entregas realizadas por toda a região de Bragança. Receba toda semana ou mês.
                    </p>
                </div>

                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-utensils"> <GiKnifeFork /> </i>
                    </div>
                    <h2>3. Aproveite</h2>
                    <p>
                        Se delicie com uma marmita fresca, saudável e ideal para sua rotina!
                    </p>
                </div>
            </div>
            <div>
                <Envio/>
            </div>
        </div>
        </>
    )
}

export default Main