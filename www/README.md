# 📋 Axios com Next.js e Tailwind CSS

Este repositório contém uma aplicação simples desenvolvida com **Next.js**, estilizada utilizando **Tailwind CSS** e que faz uso de **Axios** para comunicação com uma **API** externa. O objetivo principal é demonstrar conceitos fundamentais de desenvolvimento web moderno, como renderização otimizada, criação de rotas, gerenciamento de estado, integração com serviços externos e exibição de uma tela de carregamento.

---

## 🛠️ Tecnologias Utilizadas

-   **[Next.js](https://nextjs.org/)**: Framework baseado em React com recursos de rotas automáticas e renderização otimizada (SSR/SSG).
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitário para estilizar usando classes pré-definidas.
-   **[Axios](https://axios-http.com/)**: Biblioteca para realização de requisições HTTP de forma simples e organizada.

---

## 🚀 Funcionalidades

-   **Página Inicial**:

    -   Botão para chamar a **API** (fazendo requisição GET) e teste de carregamento.
    -   Link para a página de formulário.

-   **Formulário**:

    -   Carrega dados previamente salvos ao iniciar.
    -   Envia dados (e-mail, senha e opção “lembrar de mim”) para a API.
    -   Exibe um **Backdrop** para indicar estado de carregamento.

-   **Configuração via Arquivo**:
    -   URL base da API definida em um arquivo de configuração (`config.ts`).
    -   Instância customizada do **Axios** para gerenciar headers e timeout.

---

## 🖥️ Como Executar o Projeto

### 1. Clone este repositório:

```bash
git clone https://github.com/Lucas-Gardini/react-axios-http.git
cd react-axios-http/www
```

### 2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

### 3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

### 4. Acesse no navegador:

```
http://localhost:3000
```

### 5. Em outro terminal, execute o servidor da API:

```bash
cd react-axios-http
node server.js
```

---

## 🌟 Por que Next.js, Tailwind CSS e Axios?

-   **Next.js**: Facilita a criação de aplicações modernas com rotas automáticas, SSR/SSG e integração simples com APIs.
-   **Tailwind CSS**: Permite estilizar rapidamente com classes utilitárias, facilitando a manutenção do layout.
-   **Axios**: Simplifica o envio de requisições HTTP e a manipulação de dados retornados pela API.

---

## 📝 Licença

Este projeto está sob a **MIT License**. Fique à vontade para utilizar, modificar e distribuir conforme necessário.

---

Feito com ❤️ por [Lucas Gardini](https://github.com/Lucas-Gardini)

```

```
