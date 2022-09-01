function teste1(num){
    if(num > 7) 
        console.log(num)

    console.log('Final!!') //essa liha aqui não tem a ver com o if. Mesmo se tivesse identada
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //cuidado com o ponto e virgula. Não usar no bloco if
        console.log(num)
    } 
}

teste2(6)
teste2(8) //vai mostrar os dois numeros pq o console log está fora do bloco if