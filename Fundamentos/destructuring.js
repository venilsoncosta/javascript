const pessoa = {
    nome: 'Louise',
    idade: 29,
    endereco: {
        logradouro: 'Rua irene maria de macedo santos',
        numero: 67,
        apartamento: 204
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)
