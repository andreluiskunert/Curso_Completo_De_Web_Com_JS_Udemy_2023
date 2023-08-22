/*
  Segunda-feira 30/01/2023
das 22:01:00 a 22:20:00 h+|-
duração: 15 minutos +|- 
  Ø Herança #05 
  obs.: explicava passo a passo vim seguindo as dicas....
*/
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)  // Aula { nome:'Bem vindo', videoID: 123} Aula {nome:'Até Breve', videoID: 456}
// Simuladndo o New
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4) // Aula { nome:'Bem vindo', videoID: 123} Aula {nome:'Até Breve', videoID: 456} 