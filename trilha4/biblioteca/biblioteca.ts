interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private acervo: Livro[];

    constructor() {
        this.acervo = [
            { titulo: "O Hobbit", autor: "Tolkien", disponivel: true },
            { titulo: "O Senhor dos Anéis", autor: "Tolkien", disponivel: false },
            { titulo: "Meditações", autor: "Aurélio", disponivel: true },
            { titulo: "Orgulho e Preconceito", autor: "Jane Austen", disponivel: true },
        ];
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.acervo.filter(livro => livro.disponivel === true);
    }
}

const minhaBiblioteca = new Biblioteca();
const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();

console.log("Livros Disponíveis:");
livrosDisponiveis.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});