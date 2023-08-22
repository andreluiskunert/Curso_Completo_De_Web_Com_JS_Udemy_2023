/*
   Segunda-feira, 19 de dezwmbro de 2022
   Funções ARROW  #03

*/
let comparaComthis = function( param ) {
    console.log(( this === param))

}
comparaComthis(global) // true 
const obj = {}
comparaComthis = comparaComthis.bind(obj)
comparaComthis(global) // false
comparaComthis(obj) // false
let comparaComthisArrow = param => console.log(this === param) 
conparaComthisArrow(global) //  False 
comparaComthisArrow(modules.exprts) // true

comparaComthisArrow = comparaComthisArrow.bind(obj)
comparaComthisArrow(obj) // false
comparaComthisArrow(modules.exprts) // true

