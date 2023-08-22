// Segunda-feira, 07 de novembro de 2022
// das 22:26:00 a 22:55:00 h+|-
// Exemplos básicos de funçẽos #01
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
// 5
imprimirSoma(2)
// NaN
imprimirSoma(2, 13, 4, 5, 6, 7, 8)// pega os dois primeiros e soma,os outros ignora...
// 15
///---///----////
// FUnção Retorna
 function soma(a, b = 0) {
    return a + b
 }
 console.log( soma(2, 3))