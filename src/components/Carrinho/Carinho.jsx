import styles from './styles.module.css';

//Dados
const itensMock = [
    { id: 1, nome: "Frango Refogado + Arroz", kcal: "450 kcal", precoTotal: 49.80, qtd: 2 },
    { id: 2, nome: "Lasanha Gratinada", kcal: "580 kcal", precoTotal: 31.90, qtd: 1 }
];

function Carrinho() {
    return (
        <>
            <div className={styles.textosCarrinhos}>
                <h1 className={styles.titulo}>Carrinho</h1>
                <h3 className={styles.subTitulo}>Revise seu pedido e finalize a compra</h3>
            </div>

            <div className={styles.paginaCompras}>
                
                <div className={styles.produtosCompras}>
                    
                    <div>
                        <h1>Itens do Pedido</h1>
                        {itensMock.map((item) => (
                            <div key={item.id} className={styles.itemCarrinho}>
                                <div className={styles.itemInfo}>
                                    <div className={styles.imgProduto}></div>
                                    <div className={styles.itemTexto}>
                                        <h4>{item.nome}</h4>
                                        <p>{item.kcal}</p>
                                    </div>
                                </div>
                                <div className={styles.itemControles}>
                                    <span className={styles.precoItem}>R$ {item.precoTotal.toFixed(2)}</span>
                                    <p style={{margin: 0, fontSize: '0.8rem', color: '#666'}}>Qtd: {item.qtd}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* transformar em Map para receber dados de endereço*/}
                    <div className={styles.caixaEnderco}>
                        <h1>Endereço de Entrega</h1>
                        <p style={{margin: '5px 0'}}><strong>Rua das Flores, 123</strong></p>
                        <p style={{margin: 0, color: '#666'}}>Centro Bragança Paulista, SP. CEP 12900-000</p>
                    </div>

                        {/* Mudar para inputs ou cards de forma de pagamento*/}
                    <div className={styles.caixaFormaPag}>
                        <h1>Forma de pagamento</h1>
                        <p style={{margin: 0, color: '#666'}}>PIX / Cartão</p>
                    </div>

                </div>

                {/*compras saida*/}
                <div className={styles.contaCompras}>
                    <h1>Resumo do Pedido</h1>
                    
                    <div className={styles.linhaResumo}>
                        <span>Subtotal</span>
                        <span>R$ 81.70</span>
                    </div>
                    <div className={styles.linhaResumo}>
                        <span>Taxa de entrega</span>
                        <span>R$ 5.90</span>
                    </div>
                    
                    <hr className={styles.divisor} />
                    
                    <div className={`${styles.linhaResumo} ${styles.total}`}>
                        <span>Total</span>
                        <span>R$ 87.60</span>
                    </div>

                    <button className={styles.btnFinalizar}>Finalizar Pedido</button>
                </div>
                
            </div>
        </>
    );
}

export default Carrinho;