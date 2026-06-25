import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useCart } from '../../Context/CartContext';

function Carrinho() {
    const { cart } = useCart();
    
    const [resumo, setResumo] = useState({
        subtotal: 0,
        taxaEntrega: 0,
        total: 0
    });

    useEffect(() => {
        if (cart.length === 0) {
            setResumo({ subtotal: 0, taxaEntrega: 0, total: 0 });
            return;
        }

        const subtotalCalculado = cart.reduce((acc, item) => {
            const precoFormatado = typeof item.preco === 'string'
                ? parseFloat(item.preco.replace(',', '.'))
                : item.preco;
            return acc + (precoFormatado * item.quantidade);
        }, 0);

        const taxaFixa = 5.00; // Taxa de entrega fixa simulada
        
        setResumo({
            subtotal: subtotalCalculado,
            taxaEntrega: taxaFixa,
            total: subtotalCalculado + taxaFixa
        });

    }, [cart]);

    const finalizarPedido = () => {
        let texto = "Olá, Papa da Wal! Gostaria de finalizar o seguinte pedido:%0A%0A";
        
        cart.forEach(item => {
            texto += `- ${item.quantidade}x ${item.nome}%0A`;
        });

        texto += `%0A*Subtotal:* R$ ${resumo.subtotal.toFixed(2)}`;
        texto += `%0A*Taxa de Entrega:* R$ ${resumo.taxaEntrega.toFixed(2)}`;
        texto += `%0A*TOTAL:* R$ ${resumo.total.toFixed(2)}%0A`;
        texto += `%0A*Endereço:* Rua das Flores, 123 - Bragança Paulista`;
        texto += `%0A*Pagamento:* PIX`;

        const numeroWhatsApp = "5511999999999"; 
        const link = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
        
        window.open(link, '_blank');
    };

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
                        
                        {cart.length === 0 ? (
                            <p style={{ color: '#666' }}>Seu carrinho está vazio. Que tal adicionar algumas delícias?</p>
                        ) : (
                            cart.map((item) => {
                                const precoFormatado = typeof item.preco === 'string'
                                    ? parseFloat(item.preco.replace(',', '.'))
                                    : item.preco;

                                return (
                                    <div key={item.id} className={styles.itemCarrinho}>
                                        <div className={styles.itemInfo}>
                                            <div className={styles.imgProduto}>
                                                {item.imagem && <img src={item.imagem} alt={item.nome} style={{ width: '100%', borderRadius: '8px' }} />}
                                            </div>
                                            <div className={styles.itemTexto}>
                                                <h4>{item.nome}</h4>
                                                <p>{item.descricao?.substring(0, 30)}...</p>
                                            </div>
                                        </div>
                                        <div className={styles.itemControles}>
                                            <span className={styles.precoItem}>
                                                R$ {(precoFormatado * item.quantidade).toFixed(2)}
                                            </span>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>
                                                Qtd: {item.quantidade}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <div className={styles.caixaEnderco}>
                        <h1>Endereço de Entrega</h1>
                        <p style={{ margin: '5px 0' }}><strong>Rua das Flores, 123</strong></p>
                        <p style={{ margin: 0, color: '#666' }}>Bragança Paulista, SP. CEP 12900-000</p>
                    </div>

                    <div className={styles.caixaFormaPag}>
                        <h1>Forma de pagamento</h1>
                        <p style={{ margin: 0, color: '#666' }}>PIX / Cartão</p>
                    </div>
                </div>

                <div className={styles.contaCompras}>
                    <h1>Resumo do Pedido</h1>

                    <div className={styles.linhaResumo}>
                        <span>Subtotal</span>
                        <span>R$ {resumo.subtotal.toFixed(2)}</span>
                    </div>
                    <div className={styles.linhaResumo}>
                        <span>Taxa de entrega</span>
                        <span>R$ {resumo.taxaEntrega.toFixed(2)}</span>
                    </div>

                    <hr className={styles.divisor} />

                    <div className={`${styles.linhaResumo} ${styles.total}`}>
                        <span>Total</span>
                        <span>R$ {resumo.total.toFixed(2)}</span>
                    </div>

                    <button
                        className={styles.btnFinalizar}
                        disabled={cart.length === 0}
                        onClick={finalizarPedido}
                        style={{ opacity: cart.length === 0 ? 0.5 : 1, cursor: cart.length === 0 ? 'not-allowed' : 'pointer' }}
                    >
                        Finalizar Pedido
                    </button>
                </div>
            </div>
        </>
    );
}

export default Carrinho;