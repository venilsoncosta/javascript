//armazenando uma função numa variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//funcao arrow
const soma = (a, b) =>{
    return a + b
}

//arrow menor ainda
const subtracao = (a, b) => a - b 
console.log(subtracao(7, 5))