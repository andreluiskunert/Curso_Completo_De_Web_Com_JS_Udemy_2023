/* 
  Sábado, 11/02/2023
  Das 10:22:00 a 10:30:00 h+|-
  Duração: 8 minutos
  ø  Foreach#02
  þ Explica como será a aula...> 
*/
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i ,this)
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)})
/*
    1) Agatha 
    2) Aldo
    3) Daniel
    4) Raquel
     */

