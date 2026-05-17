import styles from '../Vitrine/styles.module.css'

//Dados
import { vitrineDados } from '../../data/imagensVitrine'

//Router
import { Link } from 'react-router-dom'

function Vitrine () {

    return (
        <>
            <div className={styles.vitrine}>
                <div className={styles.textosVitrine}>
                <h1 className={styles.titulo}>Nosso Cardápio</h1>
                <h3 className={styles.subTitulo}>Escolha suas marmitas favoritas</h3>
                </div>

                <div className={styles.vitrine_produtos}>
                    
                    {vitrineDados.map((produto) => (
                        <div key={produto.id} className={styles.card_produto}>

                        <div className={styles.CardImagem}>
                        <img src={produto.imagem} alt={produto.nome} className={styles.imagemProduto} />
                        </div>
                        <div className={styles.infoProduto}>

                            <h3 className={styles.nomeProduto}>{produto.nome}</h3>
                            <p className={styles.descricaoProduto}>{produto.descricao}</p>

                            <div className={styles.rodapeProduto}>
                                <span className={styles.preco}>R$ {produto.preco}</span>
                                <button className={styles.botaoComprar}>Adicionar ao Carrinho</button>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
            </div>    
        </>
    )
}

export default Vitrine