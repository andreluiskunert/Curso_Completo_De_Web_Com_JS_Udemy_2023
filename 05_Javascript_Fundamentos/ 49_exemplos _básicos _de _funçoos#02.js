// Segunda-feira, 07 de novembro de 2022
// das 22:46:00 a 22:55:00 h+|-
// Exemplos básicos de funçẽos #02
// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
    // 5 
}
imprimirSoma(2 ,3)
// Armazenando uma função Arrow em uma variavel
const soam =  (a, b)  =>  {
    return  a + b

}
console.log(soam(2, 3))
// 5 
// retorno implicito
const substracao = (a, b ) => a - b 
console.log(substracao(2, 3))
//  -1 
const imprimir2 = a => coonsole.log(a)
imprimir2('Legal!!')
// Legal!!
