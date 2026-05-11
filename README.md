# 📝 Todo App — Essentia Group

Aplicação de gerenciamento de tarefas desenvolvida como solução para o **Desafio Full Stack da Essentia Group** — uma to-do list simples e eficiente.

---

## 🎥 Live Coding — 2h 52m 57s ( Clique na imagem para abrir o vídeo )

Todo o desenvolvimento foi realizado ao vivo, do zero até a entrega final.

[![Assista no YouTube](https://img.youtube.com/vi/ypbtbYVKiF4/maxresdefault.jpg)](https://www.youtube.com/watch?v=ypbtbYVKiF4)

## 🎥 Demonstração — 1m 12s ( Clique na imagem para abrir o vídeo )

Entrega final.

[![Assista no YouTube](https://img.youtube.com/vi/pWGLznGr15w/maxresdefault.jpg)](https://www.youtube.com/watch?v=pWGLznGr15w)

---

## 🛠️ Ferramentas utilizadas no desenvolvimento

Além das tecnologias principais, as seguintes ferramentas foram usadas como apoio:

- **Postman** — Testes e validação dos endpoints da API REST
- **TablePlus** — Visualização e gerenciamento do banco de dados MySQL

---

## Tecnologias

**Frontend:** Angular 21, TypeScript, Tailwind CSS, RxJS

**Backend:** Node.js, Express 5, TypeScript, MySQL2

**Banco de dados:** MySQL via Docker

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) `>= 18`
- [Docker](https://www.docker.com/) e Docker Compose

---

## Estrutura do Projeto

```
techX.
├── todo-app/          # Backend (Node.js + Express)
└── todo-frontend/     # Frontend (Angular)
```

---

## Como rodar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/jpedrolopesz/desafio-essentia-tecnologies.git
cd desafio-essentia-tecnologies
```

### 2. Banco de dados

```bash
cd todo-app
docker compose up -d
```

### 3. Backend

```bash
# Dentro de todo-app
npm install
npm run dev
```

> API disponível em `http://localhost:3001`

### 4. Frontend

```bash
cd todo-frontend
npm install
npm start
```

> App disponível em `http://localhost:4200`

---

## Variáveis de Ambiente

Crie um arquivo `.env` dentro de `todo-app/` com as seguintes variáveis:

| Variável | Valor padrão |
|---|---|
| `PORT` | `3001` |
| `DB_HOST` | `localhost` |
| `DB_PORT` | `3307` |
| `DB_USER` | `root` |
| `DB_PASSWORD` | `root123` |
| `DB_NAME` | `todo_db` |

---

## Endpoints da API

Base URL: `http://localhost:3001/api/todos`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/` | Lista todas as tarefas |
| `GET` | `/:id` | Busca tarefa por ID |
| `POST` | `/` | Cria uma tarefa |
| `PUT` | `/:id` | Atualiza uma tarefa |
| `DELETE` | `/:id` | Remove uma tarefa |

---

> Desenvolvido por **João Pedro Lopes Zamonelo** para o desafio Essentia Group 🚀
