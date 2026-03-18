# API de Gerenciamento de Livraria 📚

Este projeto é uma API REST iniciada para o bootcamp da SEAL - UFPE. 
O objetivo é gerenciar um acervo de livros, permitindo operações completas de CRUD 
(Create, Read, Update e Delete) utilizando Node.js e Express.

## 🛠️ Como executar o projeto

1. Instale as dependências:
   ```bash
      npm install

2. Rode o servidor
   ```bash
     npm run dev
# O servidor está rodando em https://localhost:3000

### 3. As Rotas da API 

GET	    -     /livros	 -  Lista todos os livros da estante.
POST    -     /livros  -  Cadastra um novo livro.
PUT     -     /livros/:id  - Atualiza os dados de um livro existente pelo ID.
DELETE  -     /livros/:id  - Remove um livro do sistema pelo ID.

#### 4. Exemplos de Uso

Criar um livro (POST)
Envie um JSON no corpo da requisição para http://localhost:3000/livros

{
  "id": 1,
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "ano": 1954
}

Atualizar um livro (PUT)
Para alterar o ano do livro com ID 1, envie para http://localhost:3000/livros/1
{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "ano": 2001
}
















