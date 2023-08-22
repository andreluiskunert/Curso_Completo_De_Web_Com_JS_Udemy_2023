// Terça-feira 06 de dezembro de 2022
function getInteiroAleteatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
while(opcao != -1) { 
    opcao = getInteiroAleteatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log("The End Program") 