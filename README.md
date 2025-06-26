# 🍳 API de Catálogo de Receitas

Uma API RESTful para gerenciar receitas culinárias, desenvolvida com NestJS seguindo Clean Architecture e DDD.

## 🔗 URL Pública
[https://desafio-tecnico-back-end-na-biox.onrender.com](https://desafio-tecnico-back-end-na-biox.onrender.com)

## 📌 Funcionalidades
- ✅ Criar novas receitas
- ✅ Listar todas as receitas
- ✅ Buscar receita por ID

## 🛠️ Tecnologias
- Node.js (v18+)
- NestJS (Framework)
- TypeScript
- Clean Architecture + DDD
- Presenter Pattern

## 🚀 Como Executar

### 1. Pré-requisitos
- Node.js 18+
- npm ou yarn

### 2. Instalação
```bash
git clone https://github.com/seu-usuario/api-receitas.git
cd api-receitas
npm install
```
### 3. Executar Localmente
```bash

npm start
```
*A API estará disponível em: http://localhost:3000*    

### 4. Testar (OPCIONAL)
```bash

npm run test  # Testes unitários
```
# 📚 Documentação da API

## Rotas Disponíveis

| Método | Rota             | Descrição                   |
|--------|------------------|-----------------------------|
| POST   | `/recipes`       | Cria uma nova receita       |
| GET    | `/recipes`       | Lista todas as receitas     |
| GET    | `/recipes/:uuid` | Busca uma receita por ID    |

📥 Exemplo de Request (POST /recipes)

```bash
{
  "title": "Bolo de Cenoura",
  "description": "Delicioso bolo caseiro",
  "ingredients": ["cenoura", "açúcar", "farinha"]
}
```

📤 Exemplo de Response (GET /recipes)

```bash
[
  {
    "id": "abc123",
    "title": "Bolo de Cenoura",
    "ingredients": ["cenoura", "açúcar", "farinha"],
    "createdAt": "2025-06-25T12:00:00.000Z"
  }
]
```
📤 Exemplo de Response (GET /recipes/:uuid)
```bash
[
  {
    "id": "abc123",
    "title": "Bolo de Cenoura",
    "ingredients": ["cenoura", "açúcar", "farinha"],
    "createdAt": "2025-06-25T12:00:00.000Z"
  }
]

```
# 📂 Estrutura do Projeto (Clean Architecture)
```bash
├── api-receita/                    # Módulo principal da API
│   ├── dist/                       # Código compilado (JavaScript)
│   ├── src/                        # Código fonte TypeScript
│   │   ├── core/                   # Camada de Domínio e Aplicação
│   │   │   ├── entities/           # Entidades de negócio (ex: Recipe)
│   │   │   ├── use-cases/          # Casos de uso da aplicação
│   │   │   └── repositories/       # Interfaces/contratos de persistência
│   │   ├── infrastructure/         # Implementações concretas
│   │   │   ├── repositories/       # Implementação de repositórios (fake)
│   │   │   └── presenters/         # Formatação de responses da API
│   │   └── presentation/          # Camada de apresentação
│   │       └── controllers/        # Controladores HTTP
│   ├── test/                       # Testes automatizados
│   │   ├── e2e/                    # Testes end-to-end
│   │   └── unit/                   # Testes unitários
│   └── configs/                    # Arquivos de configuração
│       ├── tsconfig.json
│       ├── nest-cli.json
│       └── eslint.config.mjs
├── render.yaml                     # Configuração de deploy no Render
└── README.md                       # Documentação do projeto
```

### 🚀 Deploy

O deploy foi feito no Render.com usando:

    Git integrado

    Configuração automática do Node.js


📝 Licença

MIT License © 2025 - [Hugo Lima]
