# EzCommerce 🛍️

EzCommerce é uma plataforma de e-commerce moderna e completa, desenvolvida com um back-end robusto em Laravel e um front-end dinâmico e reativo em React. O projeto serve como uma base sólida para a construção de qualquer tipo de loja virtual, com foco em performance, segurança e uma ótima experiência de usuário.

---

## 📜 Índice

* [Funcionalidades](#-funcionalidades)
* [Stack de Tecnologias](#-stack-de-tecnologias)
* [Pré-requisitos](#-pré-requisitos)
* [Como Executar o Projeto](#-como-executar-o-projeto)
    * [Configuração do Back-end (Laravel)](#-configuração-do-back-end-laravel)
    * [Configuração do Front-end (React)](#-configuração-do-front-end-react)
* [Estrutura do Projeto (Front-end)](#-estrutura-do-projeto-front-end)
* [Endpoints da API](#-endpoints-da-api)

---

## ✨ Funcionalidades

O projeto conta com um conjunto completo de funcionalidades essenciais para um e-commerce:

### Autenticação e Usuário
- **Registro de Usuário**: Criação de novas contas com dados pessoais e de endereço.
- **Login e Logout**: Sistema de autenticação seguro baseado em tokens (Laravel Sanctum).
- **Verificação de Sessão**: Validação de token para manter o usuário logado de forma segura.
- **Rotas Protegidas**: Acesso a páginas específicas (como o Perfil) somente para usuários autenticados.

### Produtos
- **Listagem Dinâmica**: A `HomePage` busca e exibe todos os produtos da API.
- **Página de Detalhes**: Visualização detalhada de cada produto com carregamento otimizado.
- **Produtos Relacionados**: Exibição de produtos da mesma categoria na página de detalhes.
- **Navegação Interativa**: Atualização da página de produto sem recarregamento ao clicar em produtos relacionados.

### Perfil do Usuário
- **Página de Perfil Protegida**: Área do usuário com suas informações pessoais.
- **Visualização de Dados**: Exibição dos dados do usuário logado (nome, email, endereço).
- **Edição de Dados (Visual)**: Formulários em formato `Accordion` para edição de endereço, telefone e senha.
- **Logout**: Seção para encerrar a sessão de forma segura.

### E-commerce
- **Adicionar ao Carrinho**: Funcionalidade para adicionar produtos ao carrinho de compras (atualmente usando `sessionStorage`).
- **Controle de Acesso**: Usuários não autenticados são convidados a fazer login antes de adicionar itens ao carrinho.

### Experiência do Usuário (UX)
- **Design Responsivo**: Interface adaptável para desktops, tablets e celulares, construída com React-Bootstrap.
- **Loading Skeletons**: Exibição de "esqueletos" de conteúdo enquanto os dados da API são carregados, melhorando a percepção de performance.
- **Otimização de Imagens**: Estratégias como `loading="lazy"` para carregamento preguiçoso de imagens.
- **Feedback Visual**: Uso de alertas (SweetAlert2) para feedback em ações como login e adição ao carrinho.

---

## 🚀 Stack de Tecnologias

Este projeto é dividido em duas partes principais:

### **Back-end (API)**
- **[Laravel](https://laravel.com/)**: Framework PHP para construção da API RESTful.
- **[PHP](https://www.php.net/)**: Linguagem de programação do servidor.
- **[Laravel Sanctum](https://laravel.com/docs/sanctum)**: Para autenticação de API baseada em tokens.
- **[MySQL](https://www.mysql.com/) / Outro SGDB**: Banco de dados relacional.

### **Front-end (Cliente)**
- **[React](https://react.dev/)**: Biblioteca JavaScript para construção da interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build e desenvolvimento ultra-rápida.
- **[React Router](https://reactrouter.com/)**: Para gerenciamento de rotas na aplicação.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para fazer requisições à API Laravel.
- **[React-Bootstrap](https://react-bootstrap.github.io/)**: Componentes de UI baseados no framework Bootstrap.
- **[SweetAlert2](https://sweetalert2.github.io/)**: Para criação de alertas e modais elegantes.

---

## 🔧 Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas em sua máquina:
- [PHP](https://www.php.net/downloads.php) (versão compatível com seu Laravel)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/en) e [NPM](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/))
- Um servidor de banco de dados (ex: MySQL, MariaDB).

---

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### 📁 Configuração do Back-end (Laravel)

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/projeto-mpp-back
    ```

2.  **Navegue até a pasta do back-end:**
    ```bash
    cd /ezcommerce-back
    ```

3.  **Instale as dependências do PHP:**
    ```bash
    composer install
    ```

4.  **Crie o arquivo de ambiente:**
    ```bash
    cp .env.example .env
    ```

5.  **Gere a chave da aplicação:**
    ```bash
    php artisan key:generate
    ```

6.  **Configure o banco de dados:**
    Abra o arquivo `.env` e configure as variáveis `DB_*` com os dados do seu banco de dados.
    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=ezcommerce
    DB_USERNAME=root
    DB_PASSWORD=
    ```

7.  **Execute as migrações do banco de dados:**
    ```bash
    php artisan migrate
    ```

8.  **Execute os seeds para alimentar o banco de dados:**
    ```bash
    php artisan db:seed
    ```

9.  **Inicie o servidor do Laravel:**
    ```bash
    php artisan serve
    ```
    O back-end estará rodando em `http://localhost:8000`.

### ⚛️ Configuração do Front-end (React)

1.  **Navegue até a pasta do front-end:**
    ```bash
    cd ezcommerce
    ```

2.  **Instale as dependências do JavaScript:**
    ```bash
    npm install
    ```
    
3.  **Crie o arquivo de ambiente do front-end:**
    Crie um arquivo chamado `.env` na raiz da pasta do front-end.

4.  **Configure a URL da API:**
    Dentro do arquivo `.env`, adicione a seguinte linha, apontando para o seu back-end:
    ```env
    VITE_API_URL=http://localhost:8000/api
    ```

5.  **Inicie o servidor de desenvolvimento do React:**
    ```bash
    npm run dev
    ```

    O front-end estará acessível em `http://localhost:5173`

---

## 📂 Estrutura do Projeto (Front-end)

O front-end está organizado da seguinte forma para facilitar a manutenção:

-   `src/components`: Componentes reutilizáveis (Header, Footer, ProductCard, etc.).
-   `src/contexts`: Contextos do React para gerenciamento de estado global (AuthContext, CategoryContext).
-   `src/pages`: Componentes que representam as páginas da aplicação (HomePage, ProductPage, ProfilePage).
-   `src/services`: Funções que interagem com a API (authService, productService).
-   `src/types`: Definições de tipos do TypeScript (Product, UserType).
-   `src/routes`: Configuração das rotas da aplicação.

---

## 🔌 Endpoints da API

As principais rotas da API implementadas no back-end Laravel são:

-   `POST /api/registrar`: Cria um novo usuário.
-   `POST /api/login`: Autentica um usuário e retorna um token.
-   `GET /api/produtos`: Retorna a lista de todos os produtos.
-   `GET /api/produtos/{id}`: Retorna os detalhes de um produto específico.

**Rotas Protegidas (requerem token):**
-   `POST /api/logout`: Invalida o token do usuário.
-   `GET /api/usuario`: Retorna os dados do usuário autenticado.
-   `POST /api/realizar-pedido`: (Exemplo) Cria um novo pedido.

---