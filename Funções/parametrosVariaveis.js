function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma(0))
console.log(soma(1))
console.log(soma(2, 56, 78, 907, 1425, 5, 6))