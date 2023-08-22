console.log("------- Tagged Template #02-------")
function real(partes, ...valores) {
    const resultado =  []
       valores.forEach((valor, indice) =>{
        valor =  isNaN(valor) ? valor :  `R${valor.toFixed(2)}` 
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
   const preco = 29.90
   const precoParcelas = 11
   console.log(`1x de ${preco} ou 3x de ${precoParcelas}`)


console.log("The End.")
