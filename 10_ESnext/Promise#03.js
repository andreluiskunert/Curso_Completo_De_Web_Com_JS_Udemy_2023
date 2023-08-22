console.log("Promise #03 ")
function gerarNumerosEntre(min, max){
    if(min > max) {
        [max, min] = [ min , max]
         // const [x, y, z ] = a
    }
     return new Promise(resolve =>{
        const fator =  max - min + 1 
        const aletorio = parseInt(Math.random() * fator ) + min 
        resolve(aletorio)
     })
}
gerarNumerosEntre(10, 45)
   //.then(console.log)
   .then(num => num * 10)
   .then(numx10 => `O número gerado foi ${numx10}`)
   .then(console.log)
console.log("The End.")


