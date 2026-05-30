# Papa da Wal

![Logo do Papa da Wal](https://img.shields.io/badge/Papa%20da%20Wal-Sa%C3%BAde%20e%20Sabor-2E7D32?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Sobre o projeto

O **Papa da Wal** é um serviço de delivery de marmitas e produtos saudáveis com foco em praticidade, personalização e comunicação direta com o cliente.

A branch **ModeloSemAPI** representa a versão do projeto sem integração com backend externo. Nela, a vitrine funciona com dados locais simulados, o carrinho é global e persistido no navegador, e a navegação foi organizada em uma SPA com componentes reutilizáveis.

## Status atual

O projeto já possui a estrutura principal montada e navegável. As principais áreas já implementadas são:

- Página inicial com explicação do funcionamento do serviço
- Página de produtos com vitrine e adição ao carrinho
- Página institucional Sobre Nós
- Tela de login
- Carrinho com resumo do pedido
- Barra de navegação e rodapé em toda a aplicação

## O que já foi feito

- Estruturação do projeto com React e Vite
- Configuração de rotas com React Router DOM
- Criação de componentes reutilizáveis para as páginas principais
- Montagem da home com o passo a passo do serviço
- Criação da seção de marmitas personalizadas com link para WhatsApp
- Implementação da vitrine de produtos com cards, imagens, descrição e preço
- Integração da vitrine com React Query
- Simulação de carregamento de dados com `fetchVitrine`
- Uso de dados locais como fonte principal da vitrine
- Criação de carrinho global com Context API
- Persistência do carrinho em `localStorage`
- Cálculo de subtotal, taxa de entrega e total
- Criação da página institucional com missão, visão e valores
- Criação de uma tela de login simples
- Inclusão de atalhos de navegação no topo e no rodapé

## Funcionalidades

### Navegação

As rotas disponíveis atualmente são:

- `/` para a página inicial
- `/produtos` para a vitrine de produtos
- `/sobre` para a página Sobre Nós
- `/log-in` para a tela de login
- `/carrinho` para o carrinho

### Vitrine de produtos

A vitrine exibe os itens cadastrados localmente em `src/data/imagensVitrine.js`.
O fluxo atual usa React Query para chamar `fetchVitrine`, mas sem depender de API externa.

Cada produto possui:

- imagem
- nome
- descrição
- preço
- botão para adicionar ao carrinho

### Carrinho

O carrinho:

- recebe itens adicionados pela vitrine
- soma quantidades quando o mesmo produto é incluído mais de uma vez
- salva os dados no navegador
- exibe subtotal, taxa de entrega e total final

### Página inicial

A home apresenta o fluxo de compra em etapas e destaca duas opções:

- marmitas personalizadas com contato via WhatsApp
- itens prontos com acesso direto ao cardápio

### Sobre Nós

A página Sobre Nós apresenta:

- história da marca
- missão
- visão
- valores

### Login

A tela de login já existe visualmente e possui:

- campo de e-mail
- campo de senha
- checkbox de lembrança
- links para recuperação de senha e cadastro

## Tecnologias utilizadas

- React 19
- Vite
- React Router DOM
- TanStack React Query
- React Icons
- CSS Modules
- LocalStorage
- JavaScript

## Estrutura do projeto

- `src/App.jsx`: define as rotas e o layout base da aplicação
- `src/main.jsx`: inicializa a aplicação com `BrowserRouter`, `CartProvider` e `QueryClientProvider`
- `src/Context/CartContext.jsx`: controla o estado do carrinho
- `src/components/Toolbar/`: menu principal da aplicação
- `src/components/Footer/`: rodapé com navegação e contatos
- `src/components/Main/`: página inicial
- `src/components/Sobre/`: página institucional
- `src/components/Vitrine/`: catálogo de produtos
- `src/components/Carrinho/`: resumo do pedido
- `src/components/Login/`: formulário de acesso
- `src/components/Envio/`: CTA para levar o usuário aos produtos
- `src/data/imagensVitrine.js`: dados locais da vitrine e função de carregamento

## Dados da vitrine

A vitrine da branch ModeloSemAPI usa dados locais definidos no projeto.  
A função `fetchVitrine` apenas simula carregamento e retorna esses mesmos dados, sem chamar backend externo.

## Como rodar o projeto

    npm install
    npm run dev

Para gerar a versão de produção:

    npm run build

Para verificar o código com ESLint:

    npm run lint

## Observações

Alguns pontos ainda estão em evolução:

- o login ainda não autentica de verdade
- as rotas de recuperar senha e cadastro ainda não foram implementadas
- o botão de finalizar pedido ainda não executa checkout real
- não há integração com API externa nesta branch
