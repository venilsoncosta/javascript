const notas = [6.0, 7.3, 9.8, 4.2, 5.7, 10.0]
for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Louise',
    sobrenome: 'Viana',
    idade: 29,
    peso: 55
}
for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
