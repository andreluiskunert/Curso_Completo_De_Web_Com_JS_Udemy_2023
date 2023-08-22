/* 
  Segunda-feira, 13/02/2023
  Das 21:02:00 a 21:22:00 h+|-
  Duração: 20 minutos
  ø  Map#01
  þ Explica como será a aula...> 
*/
const nums = [1, 2, 3, 4, 5]
// For com propósito {Map}
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado) // [2, 6, 8, 10]
//===
const soma10 = e => e + 10
const triplo = e =>  e * 3
const paraDinheiro = e =>  `R${parseFloat(e).toFixed(2).replace('.',',')}`
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado) // ['R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]