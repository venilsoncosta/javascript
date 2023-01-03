const pessoa = {nome: 'João'};
pessoa.nome = 'Louise';
console.log(pessoa.nome);

Object.freeze(pessoa) //a partir daqui eu não tenho como alterar nada no objeto pessoa.

pessoa.nome = 'Maria';

