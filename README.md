![Logo do Papa da Wal](https://img.shields.io/badge/Papa%20da%20Wal-Sa%C3%BAde%20e%20Sabor-2E7D32?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

# Papa da Wal

O **Papa da Wal** é um serviço de delivery de marmitas e produtos saudáveis com foco em praticidade, personalização e comunicação direta com o cliente. Esta versão foi reorganizada em React para sair de uma base estática e passar a funcionar como uma SPA com componentes reutilizáveis, navegação interna e estado compartilhado.

## Status atual

O projeto já possui a estrutura principal da aplicação montada. A navegação, a vitrine de produtos, o carrinho e as páginas institucionais já estão conectados e funcionando dentro do fluxo atual da interface.

## O que já foi feito

- Estruturação do projeto com React + Vite.
- Configuração do roteamento com React Router.
- Criação de uma barra superior de navegação e de um rodapé fixo da aplicação.
- Montagem da página inicial com explicação do funcionamento do serviço.
- Criação da página Sobre Nós com texto institucional, missão, visão e valores.
- Criação da vitrine de produtos com cards, imagem, descrição, preço e botão de compra.
- Integração da vitrine com React Query para buscar produtos de uma API local.
- Criação de fallback com dados locais para manter a vitrine visível caso a API não responda.
- Implementação de carrinho global com Context API.
- Persistência do carrinho em `localStorage` para manter os itens entre recarregamentos.
- Cálculo de subtotal, taxa de entrega e total no resumo do pedido.
- Criação de uma tela de login simples em layout e validação básica de formulário.
- Inclusão de um atalho para pedido via WhatsApp na página inicial.

## Funcionalidades presentes

### Navegação

As rotas já configuradas atualmente são:

- `/` para a página inicial.
- `/produtos` para a vitrine.
- `/sobre` para a página institucional.
- `/log-in` para a tela de login.
- `/carrinho` para o carrinho.

### Vitrine

A página de produtos busca os itens em `http://127.0.0.1:8080/produtos` e exibe uma lista de cards com botão para adicionar ao carrinho. Se a requisição falhar ou demorar, o sistema ainda consegue renderizar os dados locais definidos em `src/data/imagensVitrine.js`.

### Carrinho

O carrinho recebe os produtos adicionados pela vitrine, soma quantidades repetidas, guarda o estado no navegador e mostra um resumo com subtotal, taxa de entrega e total final.

### Institucional

A seção Sobre Nós apresenta a história da marca, além de missão, visão e valores. A home explica o fluxo básico de compra em etapas e direciona o usuário para os produtos ou para o contato via WhatsApp.

## Tecnologias utilizadas

- React 19
- Vite
- React Router DOM
- TanStack React Query
- React Icons
- CSS Modules

## Estrutura do projeto

- `src/App.jsx`: define o layout base da aplicação e as rotas.
- `src/main.jsx`: inicializa o app com `BrowserRouter`, `CartProvider` e `QueryClientProvider`.
- `src/Context/CartContext.jsx`: controla o estado global do carrinho.
- `src/components/Toolbar/`: menu principal da aplicação.
- `src/components/Footer/`: rodapé com navegação e contatos.
- `src/components/Main/`: página inicial com explicação do fluxo.
- `src/components/Sobre/`: página institucional da marca.
- `src/components/Vitrine/`: catálogo de produtos.
- `src/components/Carrinho/`: resumo do pedido e totalização.
- `src/components/Login/`: formulário de acesso.
- `src/components/Envio/`: CTA para levar o usuário aos produtos.
- `src/data/imagensVitrine.js`: dados locais e função de busca da vitrine.

## Observações sobre o estado atual

Alguns pontos ainda estão em evolução e fazem parte do andamento natural do projeto:

- O fluxo de autenticação ainda é apenas visual.
- As rotas de recuperação de senha e cadastro aparecem nos links da tela de login, mas ainda não foram implementadas.
- O botão de finalizar pedido ainda não dispara um checkout real.
- O envio e a comunicação com backend ainda dependem da API local usada na vitrine.

## Como rodar o projeto

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Para verificar o código com ESLint:

```bash
npm run lint
```
