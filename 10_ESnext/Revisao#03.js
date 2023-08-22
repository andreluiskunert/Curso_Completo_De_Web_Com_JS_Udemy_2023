console.log("---Revisão #03----")
// ES8: Object.values/Objct.entries
const obj = { a:1, b:2, c:3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))
// Melhorias na Notação Literal
 const nome ='Sophia '
  const pessoa ={
    nome,
    ola(){
        return 'Oi Linda do tio'
    }
  }
  console.log(pessoa.nome, pessoa.ola())
  // Class
  class Animal {}
  class Cachorro extends Animal{
    falar(){
        return 'Au Au'
    }
  } 
  console.log(new Cachorro().falar())
console.log("The End.")