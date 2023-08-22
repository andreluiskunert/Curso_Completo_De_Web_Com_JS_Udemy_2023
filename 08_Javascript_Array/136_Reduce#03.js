/* Sábado, 18/02/2023
Das 08:30:00 a 08:48:00 h+|-
Duração: 13  minutos
ø  Reduce #03
þ Explica como será a aula...
*/
/* Array.prototype.reduce2 = function(callback) {
    let acumulador = this [0] 
         for(let i = 1; i < this.length; i++){
            acumulador = callback(acumulador, this, i, this) 
    } 
    return acumulador    
} 
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma)) // 21
/// */

Array.prototype.reduce2 = function(callback) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = indiceInicial
         for(let i = indiceInicial; i < this.length; i++){
            acumulador = callback(acumulador, this, i, this) 
    } 
    return acumulador    
} 
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma)) // 42 
