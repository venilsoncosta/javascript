const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numeros) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${numeros[x]}`)
}
