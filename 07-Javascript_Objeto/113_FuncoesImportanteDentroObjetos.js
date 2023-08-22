// Quinta-feira 19 / 01 / 2023
/*
Ø revisão no Sábado 21/01/2023 
Das 09:33:00 a 09:44:00 h+|-
 */
/*
 § Funções Importante Dentro de Objetos
 das 22:32:00 a 23:00:00 h+|-
*/
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 33,
}
console.log(Object.keys(pessoa)) // ['nome', 'idade', 'peso']
console.log(Object.values(pessoa)) // ['Rebeca', 2, 33]
console.log(Object.entries(pessoa)) // [['nome', 'Rebeca'], ['idade', 2 ],['peso', 13]]

// ---
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${e[0]}: ${e[1]}}`)
})
/*
[['nome', 'Rebeca'], ['idade', 2 ],['peso', 13]]
nome: Rebeca
idade: 2
peso: 13
*/
// Object.assing [ECMAScript 2015]
const dest = {a: 1}
const Obj01 ={ b: 2}
const Obj02 = {c: 3, a: 4}
const Obj = Object.assign(dest, Obj01, Obj02)
Object,freeze(Obj)
Obj.c = 1234 
console.log(Obj)
/*
{a: 4, b: 2, c: 3}
*/