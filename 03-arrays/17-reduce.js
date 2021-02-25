const arr = [0, 0, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 8, 8, 9, 10];
const newArr = [4, 5, 2, 1, 0, 3, 3, 1, 4, 3, 2, 2];

const result = arr.sort().reduce((init, current) => {
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }

  return init;
}, []);

console.log(result);

const orderArray = Array.from(new Set(newArr));
console.log(orderArray);
