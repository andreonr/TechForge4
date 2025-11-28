var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.acervo = [
            { titulo: "O Hobbit", autor: "Tolkien", disponivel: true },
            { titulo: "O Senhor dos Anéis", autor: "Tolkien", disponivel: false },
            { titulo: "Meditações", autor: "Aurélio", disponivel: true },
            { titulo: "Orgulho e Preconceito", autor: "Jane Austen", disponivel: true },
        ];
    }
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.acervo.filter(function (livro) { return livro.disponivel === true; });
    };
    return Biblioteca;
}());
var minhaBiblioteca = new Biblioteca();
var livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
console.log("Livros Disponíveis:");
livrosDisponiveis.forEach(function (livro) {
    console.log("- ".concat(livro.titulo, " por ").concat(livro.autor));
});