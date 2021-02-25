// todas as chamadas conseguintes retornam true
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
// Pequeno detalhe: Array.prototype por si só é uma array:
console.log(Array.isArray(Array.prototype));

// todas as conseguintes retornam false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray("console.log(Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray({ __proto__: Array.prototype }));
