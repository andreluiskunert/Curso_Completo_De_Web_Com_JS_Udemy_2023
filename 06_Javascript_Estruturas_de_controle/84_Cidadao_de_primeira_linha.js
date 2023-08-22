// Sexta-feira,09/12/2022
function fun1(){}
// Armazenar uma variavel
const fun2 = function (){}
// Armazenar em um array
const array = [function(a, b){return a+ b} , fun1, fun2]
console.log(array[0](3, 5)) // -> 8
//  Armazenar um objeto
const obj = {}
    obj.falar = function (){ return "Bora estudar"}
        console.log(obj.falar()) // -> Bora estudar
// Passar função como PARAM
    function run(){
        fun1()
    } 
        run(function(){ console.log('Executando....')}) //-> Executando....'
// Uma função pode retornar/conter um função 
function Soma(a, b) {
    return function (c) {
        console.log(a +  b + c)
    }

}
Soma(2,3) (4) //  -> 9 
const cimcoMais = Soma(2, 3)
cimcoMais(4) //-> 9