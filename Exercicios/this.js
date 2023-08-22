console.log("---- This----")
console.log("......")
console .log("Entendendo This...")
console.log("this === global :", this  === global)
console.log("this  === module :", this === module)
console.log("this  === module.exports :", this === module.exports)
console.log("this  === exports :", this === exports)
////
function logThis(){
    console.log("Dentro de uma função(this):" )
    console.log("-> this  === exports :", this === exports)
    console.log("-> this  === module.exports :", this === module.exports)
    console.log("-> this === global :", this  === global ,"so aqui é verdadeiro...")
}
 logThis()
console.log("The End.")

