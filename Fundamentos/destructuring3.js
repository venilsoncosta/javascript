function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const objeto = {max: 500, min: 4}
console.log(rand(objeto))
