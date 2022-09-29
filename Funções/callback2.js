const notas = [5.8, 7.1, 7.9, 8.2, 3.9, 6.0, 4.3]

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
       
}
console.log(notasBaixas)

//com callback

const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(notasBaixas2)