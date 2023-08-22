/* 
  sexta-feira, 17/02/2023
  Das 22:00:00 a 22:16:00 h+|-
  Duração: 16 minutos +|- 
  ø  Reduce #01
  þ Explica como será a aula...
*/
const alunos = [
    {nome:'João', nota:7.3, bolsita: false},
    {nome:'Maria', nota:9.2, bolsita: true},
    {nome:'Pedro', nota:9.8, bolsita: false},
    {nome:'Ana', nota:8.7, bolsita: true},
]
console.log(alunos.map(a => a.nota)) // [7.3, 9.2, 9.8, 8.7]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
 console.log(acumulador, atual) 
 return acumulador + atual 
 /*
  7.3  9.2
  16.5  9.8
  26.3   8.7
 */
},10)
/*
17.3  9.2 
26.5  9.8
36.3  8.7
*/
console.log(resultado) // 35  45