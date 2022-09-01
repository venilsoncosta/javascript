const nome = 'Louise'
const concatenacao = 'Olá, ' + nome + '!'
console.log(concatenacao)

const template = `
    olá,
    ${nome}`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado, Louise')}!`)