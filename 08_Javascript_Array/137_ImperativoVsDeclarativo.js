/* Segunda-feira,20/02/2023
Das 22:00:00 a 22:18:00 h+|-
Duração: 18 minutos
ø  Imperativo VS Declarativo
þ Explica como será a aula...
*/
const alunos = [
    {nome: 'João', nota: 7.9 },
    {nome: 'Maria', nota:7.8 }
]
// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) // 8.55
// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length) // 8.55..