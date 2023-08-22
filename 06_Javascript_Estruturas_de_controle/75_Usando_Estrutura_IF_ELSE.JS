// Quinta-feria 01 de  dezembro de 2022
const imprimirResultado = function(nota){
    if(nota >= 7) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}
imprimirResultado(10) // Aprovado
imprimirResultado(4) // Reprovado
imprimirResultado('Epa') // Reprovado  -> Cuidado para evitar com os códigos
