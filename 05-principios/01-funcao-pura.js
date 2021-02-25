// Impura
const PI = 3.14;
function areaCirc(raio) {
  return raio * raio * PI;
}
console.log(areaCirc(10));

// Estável
function area(raio) {
  return raio * raio * Math.PI;
}
console.log(area(8).toFixed(1));

// Pura
function areaPura(raio, pi) {
  return raio * raio * pi;
}
console.log(areaPura(9, Math.PI));
