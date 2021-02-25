class Produto {
  constructor(nome, preco, desc) {
    this.nome = nome;
    this.preco = preco;
    this.desc = desc / 100;
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const geladeira = new Produto("Geladeira", 1000, 10);
console.log(geladeira);
console.log(geladeira.precoFinal);
