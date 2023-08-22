// Quinta-feira, 22 / 12 / 2022
// Funções Callback #01
const fabricantes = ["Mercedes", "Audi", "BNW"]
function imprimir(nome, indice) {
    console.log(`${indice +1}, ${nome}`)
} 
fabricantes.forEach(imprimir)
/*
1-Mercedes
2-Audi
3- BNW
 */
fabricantes.forEach(fabricante => console.log(fabricante)
/*
Mercedes
 Audi
BNW
*/)