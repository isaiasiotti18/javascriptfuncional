module.exports = (array, pattern) =>
  array.filter((el) => !el.includes(pattern));
