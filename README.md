
# Clean Fastify API

API construída com **Fastify** (Node.js), **Prisma** (para ORM), e **Zod** (para validação de dados). O projeto é desenvolvido em **TypeScript**.

- [Instalação](#instalação)
- [Configuração do .ENV](#configuração-do-env)
- [Usando o Docker Compose](#usando-o-docker-compose)
- [Configuração do Prisma](#configuração-do-prisma)
- [Rodando a API](#rodando-a-api)
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

## Configuração do .ENV

Para configurar a aplicação, crie um arquivo `.env` na raiz do projeto com os seguintes parâmetros:

```env
PORT=3333
DATABASE_URL="postgresql://user_fast:123456@localhost:5432/db_fast"
```

## Usando o Docker Compose

O projeto oferece suporte para rodar um banco de dados PostgreSQL em um container Docker utilizando o **Docker Compose**.

### Passos para rodar o banco de dados com Docker Compose:

1. Certifique-se de que o **Docker** e o **Docker Compose** estão instalados em seu ambiente.

2. No diretório do projeto, execute o seguinte comando para subir o container do banco de dados:

   ```bash
   docker-compose up --build
   ```

   Isso irá:
   - Criar e rodar o container para o banco de dados PostgreSQL.
   - Configurar o banco de dados conforme a configuração no arquivo `docker-compose.yml`.

3. Para parar o container do banco de dados, execute:

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

## Rodando a API

Para rodar o projeto localmente.

1. Inicie o servidor com o comando:

   ```bash
   pnpm dev
   ```

   Isso irá rodar o servidor em modo de desenvolvimento. O servidor estará rodando na porta padrão (geralmente `3333`).

2. Acesse a API no navegador ou via **Postman**/**Insomnia**:

   ```bash
   http://localhost:3333
   ```   
---

## Scripts

- `pnpm dev`: Inicia o servidor em modo de desenvolvimento.
- `npx prisma migrate dev`: Aplica as migrações no banco de dados.
- `npx prisma generate`: Gera o cliente Prisma após alterações no modelo.
- `npx prisma studio`: Abre o modo de visualizar o banco de dados.

---
