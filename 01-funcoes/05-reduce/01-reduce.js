const carrinho = [
  { nome: "Caneta", qtd: 9, preco: 1.22 },
  { nome: "Lápis", qtd: 5, preco: 0.5 },
  { nome: "Caderno", qtd: 2, preco: 17.9 },
  { nome: "Tesoura", qtd: 1, preco: 5.99 },
];

const totalCarrinho = (acc, el) => {
  let total = acc + el.qtd * el.preco;
  return total;
};

const totals = (item) => {
  const { nome, qtd, preco } = item;
  const total = qtd * preco;

  return `Item: ${nome}(s) | Qtd: ${qtd} | Total: ${total} `;
};

const valorTotal = carrinho.reduce(totalCarrinho, 0);

carrinho.map((item) => console.log(totals(item)));
console.log(`Total do carrinho foi ${valorTotal}`);
