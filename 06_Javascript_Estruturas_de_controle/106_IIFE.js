//  Quinta-feira 05 / 01 / 2023
// IIFE  --> Immediately Invoked Function Expression {Expressão de função invocada imediatamente}
(function(){
    console.log('Será executado na hora!')
     console.log('Foge do escopo mais abarangente!')
}) () /* 
    Será executado na hora!
        Foge do escopo mais abarangente!
*/ 
console.log('Será executado na hora!')  //  Será executado na hora!
     console.log('Foge do escopo mais abarangente!') //    Foge do escopo mais abarangente!