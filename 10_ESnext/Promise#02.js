console.log("Promise #02")
// function 
/* setTimeout(function() {
    console.log('Estou executando a 1ª callback...')
    setTimeout((function(){
        console.log('Estou executando a 2ª callback..')

        setTimeout((function() {
            console.log('Estou executando a 3ª callback...')

        }, 2000 ))

    }, 2000))
} ,2000 ) */
// Promise
 function esperarPor(tempo = 2000){
    return new Promise(function(resolve) {
        setTimeout(() => {
        console.log('Executando Promise...')
             resolve()
          },   tempo );
    } ) 
 }
 esperarPor()
 .then(()=> esperarPor())
 .then(()=> esperarPor())
 .then(()=> esperarPor())

console.log("The End.")
