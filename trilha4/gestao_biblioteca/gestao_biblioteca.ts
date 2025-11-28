interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private acervo: LivroBiblioteca[];

    constructor() {
        this.acervo = [
            { titulo: "O Hobbit", autor: "Tolkien", genero: "Fantasia", disponivel: true },
            { titulo: "O Senhor dos Anéis", autor: "Tolkien", genero: "Fantasia", disponivel: false },
            { titulo: "Meditações", autor: "Aurélio", genero: "Bibliografia", disponivel: true },
            { titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "Romance", disponivel: true },
        ];
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.acervo.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.acervo.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        const disponiveis = this.acervo.filter(livro => livro.disponivel === true);
        
        return disponiveis.sort((a, b) => {
            if (a.titulo < b.titulo) return -1;
            if (a.titulo > b.titulo) return 1;
            return 0;
        });
    }
}

const gestao = new BibliotecaGestao();

console.log("1. Livros Disponíveis Ordenados por Título ");
gestao.obterLivrosDisponiveisOrdenados().forEach(livro => {
    console.log(`- ${livro.titulo}`);
});

console.log("\n 2. Filtrar por Gênero: Romance ");
gestao.filtrarPorGenero("Romance").forEach(livro => {
    console.log(`- ${livro.titulo} (Gênero: ${livro.genero})`);
});

console.log("\n 3. Buscar por Autor: Flores ");
gestao.buscarPorAutor("Flores").forEach(livro => {
    console.log(`- ${livro.titulo} (Disponível: ${livro.disponivel})`);
});