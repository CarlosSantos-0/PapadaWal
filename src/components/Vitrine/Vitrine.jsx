import styles from '../Vitrine/styles.module.css'

// Dados
import { vitrineDados, fetchVitrine } from '../../data/imagensVitrine'
import { useQuery } from '@tanstack/react-query'

//Router
import { Link } from 'react-router-dom'

// Contexto
import { useCart } from '../../Context/CartContext'

function Vitrine () {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['produtos'],
        queryFn: fetchVitrine,
    })

    {/* Acessando a função de adicionar ao carrinho do contexto */}
    const { addToCart } = useCart()

    const produtos = data ?? vitrineDados

    if (isLoading) {
        return (
            <div className={styles.vitrine}>
                <div className={styles.textosVitrine}>
                    <h1 className={styles.titulo}>Nosso Cardápio</h1>
                    <h3 className={styles.subTitulo}>Escolha suas marmitas favoritas</h3>
                </div>
                <div className={styles.vitrine_produtos}>
                    <p>Carregando produtos...</p>
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className={styles.vitrine}>
                <div className={styles.textosVitrine}>
                    <h1 className={styles.titulo}>Nosso Cardápio</h1>
                    <h3 className={styles.subTitulo}>Escolha suas marmitas favoritas</h3>
                </div>
                <div className={styles.vitrine_produtos}>
                    <p>Erro ao carregar produtos: {error?.message ?? 'Erro desconhecido'}</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={styles.vitrine}>
                <div className={styles.textosVitrine}>
                    <h1 className={styles.titulo}>Nosso Cardápio</h1>
                    <h3 className={styles.subTitulo}>Escolha dos nossos produtos</h3>
                </div>

                <div className={styles.vitrine_produtos}>
                    {produtos.map((produto) => (
                        <div key={produto.id} className={styles.card_produto}>
                            <div className={styles.CardImagem}>
                                <img src={produto.imagem} alt={produto.nome} className={styles.imagemProduto} />
                            </div>
                            <div className={styles.infoProduto}>
                                <h3 className={styles.nomeProduto}>{produto.nome}</h3>
                                <p className={styles.descricaoProduto}>{produto.descricao}</p>

                                <div className={styles.rodapeProduto}>
                                    <span className={styles.preco}>R$ {produto.preco}</span>
                                    <button onClick={() => {addToCart(produto)}} className={styles.botaoComprar}>Adicionar ao Carrinho</button>
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