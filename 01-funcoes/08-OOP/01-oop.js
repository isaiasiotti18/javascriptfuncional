function Produto(nome, preco, desc) {
  this.nome = nome;
  this.preco = preco;
  this.desc = desc;

  this.precoDesc = function () {
    return this.preco * (1 - this.desc);
  };
}

const geladeira = new Produto("Geladeira", 2500, 0.1);
console.log(geladeira.precoDesc());
