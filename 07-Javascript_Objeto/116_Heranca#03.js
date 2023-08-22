/*
  Quinta-feira 26/01/2023
  das 21:56:00 a 22:18:00 h+|-
  duração: 21 minutos +|- 
  Ø Herança #03
   obs.: Explica como será aula...
*/
const pai = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // preto
// ===//--------§§§§======ªªªª
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enurable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla' // tentar alterar o nome
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)// Bia tem cabelo preto.
//====§======+=====-====*=====/=====%
console.log(Object.keys(filha1))// ['nome']
console.log(Object.keys(filha2))// ['nome']
//====§======+=====-====*=====/=====%
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`) 
    /*
      nome
      Por herança: corCabelo
    */
}