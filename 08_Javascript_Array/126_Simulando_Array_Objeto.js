/* 
  Sexta-feira, 10/02/2023
  Das 22:03:00 a 22:30:00 h+|-
  Duração: 27 minutos
  ø Array:Métodos Importantes
*/
const quaseArray = { 0:'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)// { 0:'Rafael', 1: 'Ana', 2: 'Bia'} 
Object.defineProperty(quaseArray, 'toString',{
    value: function() { return Object.values(this)},
    enumerable:false
})
console.log(quaseArray[0]) // Rafael

const MeuArray = ['Rafael', 'Ana', 'Bia'] 
console.log(quaseArray.toString(), MeuArray) // ['Rafael', 'Ana', 'Bia']  ['Rafael', 'Ana', 'Bia'] 