function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4000,
    desconto: 0.15,
    getPreco
}
global.preco = 2000
global.desconto = 0.15
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 5000, desconto: 0.11}
console.log(getPreco.call(carro))