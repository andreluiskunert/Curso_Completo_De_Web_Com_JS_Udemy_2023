 console.log("  Revisão #02 ")
// Arrow Function
 const soma = (a, b) =>  a + b 
 console.log(soma(3, 5))
// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
//Parametro default
function  log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais Forte...')
// operador Rest
 function total(...numeros) {
    let total =0;
    numeros.forEach( n => total += n)
    return total
 }
  console.log(total(2, 3, 4, 5))
 console.log("The End.")



