function getIntNumeroAleatorio(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

opcao = 0

while (opcao != -1) {
    opcao = getIntNumeroAleatorio(-1, 20)
    console.log(`A opção escolhida foi ${opcao}`)
}

console.log('Até  próxima!!')
