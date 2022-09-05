//estratégia 1 pra gerar um número padrão

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(5))
console.log(soma1(4, 9))
console.log(soma1(1, 2, 3))


//estratégia 2, 3 e 4 pra gerar um parametro padão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(2, 5, 8))
console.log(soma2())


//versão mais famosa e melhor a ser usada
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(5, 5, 5))