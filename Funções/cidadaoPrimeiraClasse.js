//criar de forma literal
function nome() { }

// armazenar em uma variável
const fun1 = function() {}

//armazenar em um array

const array = [function(a, b) {return a + b}, nome, fun1 ]
console.log(array[0](2, 7))

//armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() {return 'Louise'}
console.log(obj.falar())

//uma função pode retornar/conter outra função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(4, 7)(8)

