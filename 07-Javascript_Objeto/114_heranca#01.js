/*
  Segunda-feira 23/01/2023
  das 22:05:00 a 22:25:00 h+|-
  Ø Herança #01
   Obs.: 
    Explica em cima  de uma  tabela
*/    
const  ferrari = {
    modelo: 'F40',
    velMax: 325
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype) // undefined 
console.log(ferrari.__proto__) // {}
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__=== Object.prototype) // true
console.log(Object.prototype.__proto__) // null
console.log(Object.prototype.__proto__ === null) // true
// =====
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) //  function   function
console.log(Object.prototype, MeuObjeto.prototype) // {} MeuObjeto {}
