import empada from '../assets/Vitrine/Empada.jpeg'
import lancheNatural from '../assets/Vitrine/Lanche_natural.jpeg'
import iorgute from '../assets/Vitrine/Yorgute_natural.jpeg'   
import saladaDeFrutas from '../assets/Vitrine/Salada_de_frutas.jpeg'

export const vitrineDados = [
    {
        id: 1, 
        nome: "Empada",
        descricao: "Empada de frango vamos ver se ta quebrando a caixa de texto, ate agora tudo parece de boa, acho que foi so bug aquela hora",
        preco: "12.00",
        imagem: empada
    },
    {
        id: 2,
        nome: "lanche Natural",
        descricao: "x",
        preco: "15.00",
        imagem: lancheNatural
    },
    {
        id: 3,
        nome: "Salada de Frutas",
        descricao: "x",
        preco: "10.00",
        imagem: saladaDeFrutas
    },
    {
        id: 4,
        nome: "Iorgute Natural",
        descricao: "x",
        preco: "12.00",
        imagem: iorgute
    },
    {
        id: 5,
        nome: "Iorgute Natural",
        descricao: "x",
        preco: "12.00",
        imagem: iorgute
    },
    {
        id: 6,
        nome: "Iorgute Natural",
        descricao: "x",
        preco: "12.00",
        imagem: iorgute
    }
];

export const fetchVitrine = async () => {
    const resposta = await fetch('http://127.0.0.1:8080/produtos');
    
    if (!resposta.ok) {
        throw new Error('Falha ao conectar com o banco de dados!');
    } else {console.log("Ok")}
    
    const jsonCompleto = await resposta.json();
    
    return jsonCompleto.itens;
};
