/* 
  Quinta-feira, 16/02/2023
  Das 22:10:00 a 22:28:00 h+|-
  Duração: 18 minutos
  ø  Filter #01 
  þ Explica como será a aula...
*/
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPAD Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]
 console.log(produtos.filter(function(p){
  //  return false // []
  //  return true 
  /*
    [ {nome: 'Notebook', preco: 2499, fragil: true},
      {nome: 'iPAD Pro', preco: 4199, fragil: true},
      {nome: 'Copo de vidro', preco: 12.49, fragil: true},
      {nome: 'Copo de plastico', preco: 18.99, fragil: false} ] 
    */
  //  return p.preco > 2500 
 //  [ {nome: 'iPAD Pro', preco: 4199, fragil: true}]
 // return p.preco > 2400 
 /* 
  [  {nome: 'Notebook', preco: 2499, fragil: true},
      {nome: 'iPAD Pro', preco: 4199, fragil: true}]
 */
  return false
 }))
 const caro = produto => produto.preco <= 500
 const fragil = produto => produto.fragil
 console.log(produtos.filter(caro).filter(fragil))
 /*
 [  {nome: 'Notebook', preco: 2499, fragil: true},
      {nome: 'iPAD Pro', preco: 4199, fragil: true}]
  */