//par nome/valor
const saudacao = 'opa'

function exec(){
    const saudacao = 'falaaa'
    return saudacao
}

const Cliente = {
    nome: 'Louise',
    idade: 30,
    peso: 55,
    endereco: {
        logradouro: 'rua muito legal',
        numero: 67
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)

