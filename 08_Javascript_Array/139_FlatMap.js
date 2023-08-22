/* Terça-feira,21/02/2023
Das 22:17:00 a 22:35:00 h+|-
Duração: 10 minutos
------------> 
ø Revisão :
   Sexta-feira, 24/02/2023
   das 09:51:00 a 10:10:00 h+|-
   Duração: 9 minutos
   ø FlatMap 
   § Explica e comenta passo a passo...
   ----->  
ø FlatMap
þ Explica como será a aula...
*/
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota:8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }] 
},{ nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]

}]
const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotaDaTurma)
console.log(notas1) 
console.log([].concat([[ 8.1, 9.3], [8.9, 7.3]]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([] , this.map(callback))
}
const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)

/*
 ø Resultado:
['a', 'b', 1, 2, 3, 4, 5, [6, 7]] 
[[ 8.1, 9.3], [8.9, 7.3]]
 [8.1, 9.3, 8.9, 7.3]
  [8.1, 9.3, 8.9, 7.3]
 */
