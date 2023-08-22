// Sábado 14/01/2023
/* das 08:37:00 a 08:55:00 H+|- */
// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa) // {nome: 'Pedro'}
// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} obs.: só pode atribuir para uma constante apenas uma vez;
Object.freeze(pessoa) // Uma vez que o objeto congelado não mexer mais
// exemplo
pessoa.nome = 'Maria'
pessoa.end = 'ABC'
delete pessoa.nome 
console.log(pessoa.nome) // O permanece 'Pedro' ñ muda mais após...
console.log(pessoa) // Não pode adicionar e nem deletar...
// Pode ser mudado assim:
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria' // Peramanece sendo -> {nome: 'João'}
console.log(pessoaConstante)
/* 
  {nome: 'Pedro'}
    {nome: 'João'}


*/
