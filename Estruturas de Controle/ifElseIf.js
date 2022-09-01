Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if (nota.entre (9, 10)) {
        console.log('Passou com honras')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado! Parabéns!')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação. Boa sorte')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado! Vejo você ano que vem de novo')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(2)
imprimirResultado(34)
