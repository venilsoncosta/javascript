const a = 1;
const b = 2;
const c = 3;

const objeto1 = {a: a, b: b, c: c};
const objeto2 = { a, b, c};
console.log(objeto1, objeto2);

const nomeAtributo = 'nota';
const valorAtributo = 7.89;

const objeto3 = {};
objeto3[nomeAtributo] = valorAtributo;
console.log(objeto3);
