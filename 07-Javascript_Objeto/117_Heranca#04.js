/*
 Sexta-feira 27/01/2023
das 22:05:00 a 22:37:00 h+|-
duração: 35 minutos +|- 
  Ø Herança #04 
*/
function MeuObjeto(){} 
console.log(MeuObjeto.prototype) // MeuObjeto {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__== obj2.__proto__) // true 
console.log(MeuObjeto.prototype === obj1.__proto__) // true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Boa noite! Meu nome é ${this.nome}!`) 
}
obj1.falar() // Boa noite! Meu nome é Anônimo ! 
obj2.nome = 'André Luis'
obj2.falar() // Boa noite! Meu nome é André Luis ! 

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar() //  Boa noite! Meu nome é Obj3 ! 
// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__=== Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // false // null
