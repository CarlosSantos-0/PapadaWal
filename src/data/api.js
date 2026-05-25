// Simulando uma requisição para o banco de dados
export const fetchProdutos = async () => {
  // Espera 1.5 segundos para simular a internet
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return [
    { 
      id: 1, 
      nome: 'Empada de Frango', 
      preco: '12,90', 
      descricao: 'Empada de frango com massa podre, derrete na boca.',
      imagem: '/caminho/da/imagem.png' 
    },
    { 
      id: 2, 
      nome: 'Lanche Natural', 
      preco: '15,00', 
      descricao: 'Lanche leve com patê de cenoura e frango desfiado.',
      imagem: '/caminho/da/imagem.png' 
    }
  ];
}