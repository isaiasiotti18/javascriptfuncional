module.exports = function (symbols) {
  return function (array) {
    return array.map((el) => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, el);
    });
  };
};
