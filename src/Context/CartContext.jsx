import { createContext, useContext, useState, useEffect } from 'react';

// Criando o Contexto
const CartContext = createContext();

// Provedor
export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const carrinhoSalvo = localStorage.getItem('papaDaWal_carrinho');
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });

    useEffect(() => {
        localStorage.setItem('papaDaWal_carrinho', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (produto) => {
        setCart((carrinhoAtual) => {
            const produtoExiste = carrinhoAtual.find(item => item.id === produto.id);
            
            if (produtoExiste) {
                return carrinhoAtual.map(item => 
                    item.id === produto.id 
                    ? { ...item, quantidade: item.quantidade + 1 } 
                    : item
                );
            }
            

            return [...carrinhoAtual, { ...produto, quantidade: 1 }];
        });
        
        alert(`${produto.nome} adicionado ao carrinho!`); 
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Hook
export function useCart() {
    return useContext(CartContext);
}