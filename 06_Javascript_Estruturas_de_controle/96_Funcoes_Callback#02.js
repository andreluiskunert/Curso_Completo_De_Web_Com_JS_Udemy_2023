// Quinta-feira, 22 / 12 / 2022
// Funções Callback #02
const notas  = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0 ]
// Sem Callback 
const notasBaixas1 = []
for(let i in notas) {
    if (notas[i] > 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1) // [6.5, 5.2, 3.6]
// com Callback 
const notasBaixas2  = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)  // [6.5, 5.2, 3.6] 
// Arrow
const notasBaixas3 = notas.filter(nota => nota < 7) 
console.log(notasBaixas3) // [6.5, 5.2, 3.6] 