console.log("Promise ")
console.log("Explica o assunto...")
 let a = 1
 console.log("O resultado de A é ", a ,";")
 // função:
   let p = new Promise(function(CumporirPromessa){
    CumporirPromessa(  ['Lucas ', 'Jean', 'Luis', 'André'] ,
        /* {
       /* /*  //
      /*   x:3,
        y:5,
        w:7 */
    /*       *

    } */)
   })
  /*  p.then(function (...valor){
    console.log(valor)
   }) */
 function primeiroElemento(array) {
  //  valor => valor[0],
   return array[0]

 }
   function primeiraLetra(string) {
    return  string[0]
   }
     const letraMinuscula = letra => letra.toLowerCase()
   p .then(primeiroElemento)
   .then(primeiraLetra)
   .then(letraMinuscula)
    .then( console.log)
    
   
   console.log(" Variavél P é um  ",typeof p ,";" )
console.log("The End.")