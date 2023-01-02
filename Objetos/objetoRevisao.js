const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'genérica'
produto.preco = 220

console.log(produto);

delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 53,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function() {
        
    }
}
carro.proprietario.endereco.numero = 1000
console.log(carro);
delete carro.condutores
