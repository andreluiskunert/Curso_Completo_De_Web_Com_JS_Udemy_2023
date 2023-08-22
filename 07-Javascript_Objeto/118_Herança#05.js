/*
 Sábado 28/01/2023
das 09:00:00 a 09:15:00 h+|-
duração: 15 minutos +|- 
  Ø Herança #05 
  obs.: explicava passo a passo vim seguindo as dicas....
*/
console.log(typeof String)// function
console.log(typeof Array) // function
console.log(typeof Object)// function

String.prototype.reverse = function() {
    return this.split('').reverse('').join('')
}
console.log('Escola Cod3r'.reverse())// r3doC alocsE
// -> Array
Array.prototype.first = function(){
    return this[0] 
}
console.log([1, 2, 3, 4, 5].first()) // 1
console.log(['a', 'b', 'c'].first()) // a 
// ->  nao substitua...fica a dica...
String.prototype.toString = function() {
    return 'Lascou tudo'
}
console.log('Escola Coder'.reverse()) // odut uocasL 