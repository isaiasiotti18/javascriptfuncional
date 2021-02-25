module.exports = function (words) {
  return Object.values(
    words.reduce((counting, word) => {
      const el = word.toLowerCase();
      const qtd = counting[el] ? counting[el].qtd++ : 1;
      counting[el] = { word: el, qtd };
      return counting;
    }, {})
  );
};
