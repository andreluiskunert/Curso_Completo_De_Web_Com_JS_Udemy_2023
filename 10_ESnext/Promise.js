
console.log("Promise")
console.log("Explica....")
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(frase)
         // reject(frase)
        } ,  segundos *1000 )
    } ) 
}
  falarDepoisDe(3, 'Boa noite',)
   .then(frase => frase.concat(" Programdor JS;"))
   .then(outraFrase => console.log(outraFrase))
   .catch(e => console.log("Volta que deu bosta..kkkkk" , e))
console.log("The End.")
