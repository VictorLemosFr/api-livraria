const express = require("express"); // Importa o express
const app = express(); // Inicia o aplicativo

// Configura o servidor para entender dados recebidos no formato JSON
app.use(express.json());

// Iniciando um array para armazenar os livros cadastrados
let livros = [];

// Rota get para listar todos os livros cadastrados
app.get("/livros", (req, res) => {
  res.json(livros);
});

app.post("/livros", (req, res) => {
  const novoLivro = req.body; // Recebe os dados do livro enviado pelo cliente
  livros.push(novoLivro); // Adiciona o novo livro ao array de livros
  res.status(201).json(novoLivro); // Retorna o livro criado com status 201 (Criado)
});

app.put("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id); // Obtém o ID do livro a ser atualizado
  const livroAtualizado = req.body; // Recebe os dados atualizados do livro

  const indice = livros.findIndex((livro) => livro.id === id); // Encontra o índice do livro a ser atualizado

  if (indice !== -1) {
    livros[indice] = { ...livros[indice], ...livroAtualizado }; // Atualiza os dados do livro
    res.json(livros[indice]); // Retorna o livro atualizado
  } else {
    res.status(404).json({ message: "Livro não encontrado" }); // Retorna erro caso o livro não seja encontrado
  }
});

app.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id); // Obtém o ID do livro a ser deletado

  const listaFiltrada = livros.filter((livro) => livro.id !== id); // Filtra o array para remover o livro com o ID especificado

  if (listaFiltrada.length < livros.length) {
    livros = listaFiltrada; // Atualiza o array de livros com a lista filtrada
    res.status(200).json({ message: "Livro deletado com sucesso" }); // Retorna mensagem de sucesso
  } else {
    res.status(404).json({ message: "Livro não encontrado" }); // Retorna erro caso o livro não seja encontrado
  }
});
// Coloca o servidor para rodar na porta 3000 do seu computador
app.listen(3000, () => {
  console.log("Servidor da Livraria rodando na porta 3000 🚀");
});
