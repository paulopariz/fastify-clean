
# Clean Fastify API (Em desenvolvimento ⚠️)

API construída com **Fastify** (Node.js), **Prisma** (para ORM), e **Zod** (para validação de dados). O projeto é desenvolvido em **TypeScript**.

## Índice

- [Instalação](#instalação)
- [Rodando a API](#rodando-a-api)
- [Usando o Docker Compose](#usando-o-docker-compose)
- [Configuração do Prisma](#configuração-do-prisma)
- [Scripts](#scripts)

## Instalação

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **pnpm** (como gerenciador de pacotes)

### Passos para instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/paulopariz/fastify-clean
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd fastify-clean
   ```

3. Instale as dependências do projeto utilizando o `pnpm`:

   ```bash
   pnpm install
   ```

---

## Rodando a API

Para rodar o projeto localmente.

1. Inicie o servidor com o comando:

   ```bash
   pnpm dev
   ```

   Isso irá rodar o servidor  em modo de desenvolvimento. O servidor estará rodando na porta padrão (geralmente `3333`).

2. Acesse a API no navegador ou via **Postman**/**Insomnia**:

   ```bash
   http://localhost:3333
   ```   
---

## Usando o Docker Compose

O projeto oferece suporte para rodar em **Docker**. Com o **Docker Compose**, você pode configurar o ambiente de desenvolvimento completo, incluindo banco de dados e outros serviços.

### Passos para rodar com Docker Compose:

1. Certifique-se de que o **Docker** e o **Docker Compose** estão instalados em seu ambiente.

2. No diretório do projeto, execute o seguinte comando para subir os containers:

   ```bash
   docker-compose up --build
   ```

   Isso irá:
   - Criar e rodar os containers necessários (como o banco de dados e o servidor da API).
   - Criar um banco de dados conforme a configuração no Docker Compose.
   
3. Após o processo de build e inicialização, você poderá acessar a API normalmente em `http://localhost:3000`.

4. Para parar os containers, execute:

   ```bash
   docker-compose down
   ```

---

## Configuração do Prisma

### Passos para configurar o Prisma:

1. Após a instalação das dependências, é necessário rodar a migração do banco de dados. Se você estiver utilizando Docker, o banco de dados estará configurado automaticamente.

2. Para gerar as migrações do Prisma e configurar o banco de dados, rode o comando:

   ```bash
   npx prisma migrate dev
   ```

3. Para gerar o cliente Prisma, execute o comando:

   ```bash
   npx prisma generate
   ```

4. Você pode conferir o banco com o **Prisma Studio** rodando o seguinte comando:

   ```bash
   npx prisma studio
   ```

5. Agora o Prisma estará pronto para ser utilizado na aplicação!

---

## Scripts

- `pnpm dev`: Inicia o servidor em modo de desenvolvimento.
- `npx prisma migrate dev`: Aplica as migrações no banco de dados.
- `npx prisma generate`: Gera o cliente Prisma após alterações no modelo.
- `npx prisma studio`: Abre o modo de visualizar o banco de dados.

---
