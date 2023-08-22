console.log("---- Passsando Parametros entre Móduklos----")
console.log("   ")
console .log("Explica...")
/// Função 
module.exports = function(...nomes) {
    return nomes.map(nome => `Bora codar programador  ${nome}!`)
}
console.log("The End.")