## Landing Page

[![Author](https://img.shields.io/badge/author-Lucas_Lousada-8257e6?style=flat-square)](https://github.com/lucaslousada)
[![Last commit](https://img.shields.io/github/last-commit/lucaslousada/feedback-widget?color=8257e6&style=flat-square)](#)
[![Languages](https://img.shields.io/github/languages/count/lucaslousada/feedback-widget?color=8257e6&style=flat-square)](#)
[![Repo Size](https://img.shields.io/github/repo-size/lucaslousada/feedback-widget?color=8257e6&style=flat-square)](#)
[![License](https://img.shields.io/github/license/lucaslousada/feedback-widget?color=8257e6&style=flat-square)](LICENSE.md)

Aplicação desenvolvida no evento Next Level Week Return da Rocketseat. Você pode acessar o site através [deste link](https://feedback-widget-web-psi.vercel.app/).

<img alt="App Preview" src="./.github/app-preview.png" width="100%">

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [x] ReactJS
- [x] Tailwind CSS
- [x] TypeScript
- [x] Vite
- [x] Express
- [x] Prisma

## Layout

Você pode visualizar o layout do projeto através [deste link](https://www.figma.com/community/file/1102912516166573468).

## Iniciando

Você precisa instalar o [Git](https://git-scm.com/downloads) e o [Node.js](https://nodejs.org/en/download/) para executar este projeto.
Você pode usar [Yarn](https://yarnpkg.com/) ou [Npm](https://nodejs.org/en/download/).

```bash
# Clone o projeto e acesse a pasta
git clone https://github.com/lucaslousada/feedback-widget.git && cd feedback-widget
```

### Server

```bash
# Da pasta raiz do projeto acesse a pasta 'server'
$ cd server

# Instale as dependências
$ npm install

# Faça uma cópia de '.env.example' para '.env'
# e defina as SUAS variáveis ambiente.
$ cp .env.example .env

# Com um PostgreSQL rodando, execute os migrations
$ npx prisma migrate dev

# Inicie o servidor
$ npm run dev
```

### Web

```bash
# Da pasta raiz do projeto acesse a pasta 'web'
$ cd web

# Instale as dependências
$ npm install

# Faça uma cópia de '.env.local.example' para '.env.local'
$ cp .env.local.example .env.local

# Inicie a aplicação
$ npm run dev
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.