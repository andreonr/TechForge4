// Exercício 1:
//  Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). 
// Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.


class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
    }
  }
}

// Exercício 2: Crie uma classe Livro com os atributos título (string),


class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(titulo: string, autor: string, paginas: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = false;
  }

  marcarComoLido(): void {
    this.lido = true;
  }
}



// Exercício 3: Crie uma classe Produto com os atributos nome (string), 

class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  valorTotalEmEstoque(): number {
    return this.preco * this.quantidade;
  }
}



// Exercício 4: Crie uma classe Temperatura com um atributo valor (number em Celsius).
//  Adicione métodos para converter o valor para Fahrenheit e Kelvin.

class Temperatura {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  paraFahrenheit(): number {
    return this.valor * 1.8 + 32;
  }

  paraKelvin(): number {
    return this.valor + 273.15;
  }
}



// Exercício 5: Crie uma classe Agenda que tenha um atributo compromissos (array de strings). 

class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
  }

  listarCompromissos(): string[] {
    return this.compromissos;
  }
}
