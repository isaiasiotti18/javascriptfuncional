module.exports = function (attr, orderBy = "asce") {
  return function (array) {
    const asce = (n1, n2) => n1[attr] - n2[attr];
    const desc = (n1, n2) => n2[attr] - n1[attr];
    return array.sort(orderBy === "asce" ? asce : desc);
  };
};
