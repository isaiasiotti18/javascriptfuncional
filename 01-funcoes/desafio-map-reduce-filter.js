const carrinho = [
  { nome: "Caneta", qtd: 9, preco: 1.22, fragil: false },
  { nome: "Lápis", qtd: 5, preco: 1, fragil: true },
  { nome: "Caderno", qtd: 2, preco: 17.9, fragil: false },
  { nome: "Tesoura", qtd: 1, preco: 5, fragil: true },
  { nome: "Rocama", qtd: 2, preco: 3, fragil: true },
];

const media = carrinho
  .filter((item) => item.fragil) // Filtrando os produtos frágeis
  .map((item) => item.qtd * item.preco)
  .reduce(
    (acc, item) => {
      const qtd = acc.qtd + 1;
      const total = acc.total + item;
      const media = total / qtd;

      return {
        qtd,
        total,
        media,
      };
    },
    { qtd: 0, total: 0, media: 0 }
  );

console.log(media);
