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

Produto.prototype.log = function () {
  console.log(`Nome: ${this.nome}, Preço: ${this.preco}`);
};

Object.defineProperty(Produto.prototype, "valueDesc", {
  get: function () {
    return `Desconto de ${this.desc * 100}%`;
  },
});

const forno = new Produto("Forno", 2240, 9);
forno.log();
console.log(forno.valueDesc);
