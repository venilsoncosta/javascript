function tratarErroeLancar(erro) {
    throw new Error('Louise')
    //aqui eu posso lançar várias coisas. desde número, string e objeto
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase())
    } catch (e) {
        tratarErroeLancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'Louise'}
imprimirNomeGritado(obj)
