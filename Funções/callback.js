const fabricantes = ['Mercedez', 'BMW', 'Audi']

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}
fabricantes.forEach(imprimir)
