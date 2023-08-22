// Quinta-feira 24 de novembro de 2022
// COntexto de Execução : browser VS Node 
// Obs.: Faz varios comentarios sobre JS 
 let a = 3
 global.b = 123
 this.c= 456
 this.d = false
 this.e = 'teste'
  console.log(this .a)
 console.log(global.b)
 console.log(this.c)
 console.log(module.exports.c)
console.log(module.exports === this)
// Mode cada arquivo é um modulo diferente
console.log(module.exports)
// ------  /////
// criando uma variavel louca não faaça isso em casa...
abc = 3
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste'}