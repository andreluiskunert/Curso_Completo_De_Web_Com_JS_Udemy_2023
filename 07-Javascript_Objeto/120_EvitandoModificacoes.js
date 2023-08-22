/*
  Segunda-feira 30/01/2023
das 22:21:00 a 22:41:00 h+|-
duração: 20 minutos +|- 
  Ø Evitando Modificações
  obs.: explicava passo a passo vim seguindo as dicas....
*/
//Object.preventExtensions
const produto  = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto)) // Extensível: false
produto.nome = 'Borracha' 
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // {nome: 'Borracha', preco: 1.99}
// Object.seal
const pessoa = {nome:'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))// Selado: true
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana' , idade: 29}
// Object.freeze = selado + valores constantes...