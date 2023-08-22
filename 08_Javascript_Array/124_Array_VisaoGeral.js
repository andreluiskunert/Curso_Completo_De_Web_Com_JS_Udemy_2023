/* 
  Segunda-feira, 06/02/2023
  Das 22:12:00 a 22:32:00 h+|-
  ø Array: Visão Geral
*/
console.log(typeof Array, typeof new Array, typeof []) // function object object 
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [Bia', 'Carlos', 'Ana']
aprovados = [ 'Bia', 'Carlos', 'Ana' ]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
/* 
Bia
Carlos
Ana
undefine
*/
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) // 5
aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
console.log(aprovados.length[8] === undefined ) // true
//
// Terça-feira,07/02/2023 
// das 22:12:00 a 22:30:00 h+|-

console.log(aprovados)
aprovados.sort()
console.log(aprovados)
/* 
Abia
Ana
Bia
Carlos
Paulos
Rafael,
<4 empty itens> 
*/
delete aprovados[1]
console.log(aprovados[1]) // undefined -> Ana deletada...
console.log(aprovados[2]) // Bia 
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1','Elemento2')
console.log(aprovados) // ['Bia',  'Elemento1','Elemento2'] 
aprovados.splice(1, 0, 'Elemento1','Elemento2')
console.log(aprovados) // ['Bia',  'Elemento1','Elemento2', 'Carlos', 'Ana'] 
