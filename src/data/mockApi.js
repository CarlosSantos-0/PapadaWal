// src/data/mockApi.js

export const simularCalculoBackend = async (itensDoCarrinho) => {
    // Retorna uma Promise para simular o tempo de resposta de uma API real
    return new Promise((resolve) => {
        setTimeout(() => {
            // Calcula os valores (Essa é a lógica que ficaria no Python/Flask)
            const subtotal = itensDoCarrinho.reduce((acc, item) => {
                const precoFormatado = typeof item.preco === 'string'
                    ? parseFloat(item.preco.replace(',', '.'))
                    : item.preco;
                return acc + (precoFormatado * item.quantidade);
            }, 0);
            
            const taxaFixa = 5.00;

            // Retorna o JSON exato que o seu Front-end esperava no fetch original
            resolve({
                status: 'success',
                valores: {
                    subtotal: subtotal,
                    taxa_entrega: taxaFixa,
                    total: subtotal + taxaFixa
                }
            });
        }, 300); // 300ms de delay para fingir que foi na internet buscar
    });
};