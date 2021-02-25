module.exports = function (array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
};
