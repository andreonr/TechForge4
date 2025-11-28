interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [
            { codigo: 10, nome: "Macbook PRO" },
            { codigo: 20, nome: "Teclado Razer" },
            { codigo: 30, nome: "Mouse Zowie" },
        ];
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const minhaLoja = new Loja();
const produtoTeste = minhaLoja.buscarProdutoPorCodigo(20);

if (produtoTeste) {
    console.log(`Busca bem-sucedida: ${produtoTeste.nome}`);
} else {
    console.log("Busca falhou.");
}