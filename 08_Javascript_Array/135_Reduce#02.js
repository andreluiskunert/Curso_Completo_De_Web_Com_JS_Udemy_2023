/* sexta-feira, 17/02/2023
Das 22:17:00 a 22:30:00 h+|-
Duração: 13  minutos
ø  Reduce #02
þ Explica como será a aula...
*/
const alunos = [
    {nome:'João', nota:7.3, bolsita: false},
    {nome:'Maria', nota:9.2, bolsita: true},
    {nome:'Pedro', nota:9.8, bolsita: false},
    {nome:'Ana', nota:8.7, bolsita: true},
] 
// Desafio I : Todos os alunos são bolsistas?
const todosBolistas = (resultado, bolsita) => resultado && bolsita
console.log(alunos.map(a => a.bolsita).reduce(todosBolistas)) // false
// Desafio II : Algum aluno é bolsista?
const algumBolista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsita).reduce(algumBolista)) // true



