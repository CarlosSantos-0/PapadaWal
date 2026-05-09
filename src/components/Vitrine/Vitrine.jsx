import styles from '../Vitrine/styles.module.css'

//Dados
import { vitrineDados } from '../../data/imagensVitrine'

//Router
import { Link } from 'react-router-dom'

function Vitrine () {

    return (
        <>
            <div className={styles.vitrine}>
                <h1 className={styles.titulo}>Encontre nossos produtos aqui</h1>
                <div className={styles.vitrine_marmitas}> 
                        <div className={styles.card_pacote}> 
                            <h3>Pacote Semanal</h3>
                            <p>Marmitas customizadas para semana toda, peça até sexta e receba frescas todos os dias adaptadas e especializadas para sua dieta</p>
                            <img className={styles.imagemPacote} src="" alt="imgem" />
                            <Link className={styles.botao_pedir}>Pedir</Link>
                        </div>
                        <div className={styles.card_pacote}> 
                            <h3>Pacote Mensal</h3>
                            <p>Marmitas customizadas para semana toda, peça até sexta e receba frescas todos os dias adaptadas e especializadas para sua dieta</p>
                            <img className={styles.imagemPacote} src="" alt="imgem" />
                            <Link className={styles.botao_pedir}>Pedir</Link>
                        </div>
                </div>
                <hr />
                {/* produtos */}
                <div className={styles.vitrine_produtos}>
                    {vitrineDados.map((produto) => (
                        <div key={produto.id} className={styles.card_produto}>

                        <h3 className={styles.nomeProduto}>{produto.nome}</h3>
                        <img src={produto.imagem} alt={produto.nome} className={styles.imagemProduto} />
                        <p className={styles.descricaoProduto}>{produto.descricao}</p>

                        <div className={styles.rodapeProduto}>
                            <span className={styles.preco}>R$ {produto.preco}</span>
                            <button className={styles.botaoComprar}>Adicionar ao Carrinho</button>
                        </div>

                    </div>
                    ))}
                </div>
            </div>    
        </>
    )
}

export default Vitrine