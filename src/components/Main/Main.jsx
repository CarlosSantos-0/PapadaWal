import styles from '../Main/styles.module.css'

//icones
import { IoIosText } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { FaRegClock, FaBox } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

//Componentes
import Envio from '../Envio/Envio';

//Router
import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
        { /*<div className={styles.letterBox}>
                <div className={styles.letterText}>
                <h1>Marmitas Saudáveis Feitas com Amor</h1>
                <p>Escolha entre nossos deliciosos kits prontos ou personalize sua dieta com ingredientes frescos e selecionados</p>
                </div>
                <div className={styles.letterButton}>
                    <Link to='/produtos'>Ver Cardapio</Link>
                    <Link to='/marmita'>Montar Marmita</Link>
                </div>
        </div>*/}

        
        
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

                <div className={styles.opcaoCard2}> 
                    <div className={styles.opcaoHeader}>
                        <div className={styles.opcaoIcon}>
                            <FaBox size={20} />
                        </div>
                        <h3>Marmitas Personalizadas</h3>
                    </div>
                    <p>
                        Envie sua dieta e receba 7 marmitas preparadas especialmente para você. Ingredientes frescos, selecionados diariamente e montados de acordo com suas necessidades nutricionais.
                    </p>
                    <div className={styles.opcaoBtn}>
                        <FaWhatsapp size={30}/>
                        <Link to="https://api.whatsapp.com/send/?phone=5511999999999&text=Ol%EF%BF%BD%21+Gostaria+de+solicitar+um+or%EF%BF%BDamento+para+marmitas+personalizadas.&type=phone_number&app_absent=0" >Solicitar Via WhatsApp</Link>
                    </div>
                </div>

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

               
                

            </div>

            <div className={styles.stepsContainer}>
                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-pen-to-square"><IoIosText className={styles.icone}/></i>
                    </div>
                    <h2>1. Faça seu Pedido</h2>
                    <p>
                        Escolha entre itens prontos ou entre em contato para marmitas personalizadas
                    </p>
                </div>

                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-truck-fast"> <GiKnifeFork className={styles.icone}/>  </i>
                    </div>
                    <h2>2. Preparamos com Carinho</h2>
                    <p>
                        Ingredientes frescos selecionados diariamente
                    </p>
                </div>

                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-utensils"><MdDeliveryDining className={styles.icone}/> </i>
                    </div>
                    <h2>3. Entrega Rápida</h2>
                    <p>
                        Receba em casa fresquinho e pronto
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main