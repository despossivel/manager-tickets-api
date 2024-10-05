# Ticket Management API

Este projeto é uma API de gerenciamento de tickets de atendimento, construída com **NestJS**, utilizando **SQLite** como banco de dados. A API inclui funcionalidades para listar tickets, criar tickets e atualizar o status dos tickets. A documentação da API está disponível via Swagger.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [Docker](https://www.docker.com/) (caso deseje usar Docker)
- [Docker Compose](https://docs.docker.com/compose/) (caso utilize Docker)

---

## Como Executar o Projeto

### 1. Sem Docker

#### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/despossivel/manager-tickets-api.git
cd seu-repositorio
```

#### Passo 2: Instalar Dependências

Instale as dependências do projeto utilizando `npm`:

```bash
npm install
```

#### Passo 3: Configurar o Banco de Dados

O projeto usa **SQLite** como banco de dados padrão. Não é necessário configurar um banco de dados externo. O arquivo do banco de dados será gerado automaticamente na pasta `./src`.

#### Passo 4: Executar o Projeto

Para rodar o projeto localmente em modo de desenvolvimento:

```bash
npm run start:dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

#### Acessar a Documentação da API (Swagger)

A documentação da API estará disponível em:

```
http://localhost:3000/api
```

### 2. Com Docker

#### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/despossivel/manager-tickets-api.git
cd seu-repositorio
```

#### Passo 2: Executar o Docker Compose

Para rodar o projeto usando **Docker**, basta rodar o comando abaixo:

```bash
docker-compose up --build
```

Este comando irá construir a imagem Docker da aplicação e iniciá-la.

#### Acessar a Aplicação

Após a inicialização do contêiner, a aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

#### Acessar a Documentação da API (Swagger)

A documentação da API estará disponível em:

```
http://localhost:3000/api
```

#### Parar o Contêiner

Para parar a aplicação rodando no Docker, utilize o seguinte comando:

```bash
docker-compose down
```

---

## Estrutura do Projeto

```bash
src/
├── tickets/
│   ├── dto/
│   │   ├── create-ticket.dto.ts
│   │   └── update-ticket.dto.ts
|   ├── ticket.entity.ts
│   ├── tickets.controller.ts
│   ├── tickets.module.ts
│   ├── tickets.service.ts
├── app.module.ts
├── main.ts
```

### Endpoints Principais

- `GET /tickets`: Lista todos os tickets.
- `POST /tickets`: Cria um novo ticket.
- `PATCH /tickets/:id/status`: Atualiza o status de um ticket.

---

## Testes

Você pode executar os testes unitários e end-to-end (e2e) utilizando os seguintes comandos:

### Testes Unitários

```bash
npm run test
```

### Testes End-to-End

```bash
npm run test:e2e
```

---

## Documentação da API

A documentação interativa da API está disponível via **Swagger**. Acesse a documentação na seguinte URL após iniciar o servidor:

```
http://localhost:3000/api
```

---

## Tecnologias Utilizadas

- **Swagger** - Ferramenta para gerar a documentação da API.
- **NestJS** - Framework backend usado para construir a API.
- **TypeScript** - Linguagem de programação utilizada no projeto.
- **Docker** - Utilizado para conteinerização da aplicação.
- **Kubernets** - Utilizado para orquestração de containers.