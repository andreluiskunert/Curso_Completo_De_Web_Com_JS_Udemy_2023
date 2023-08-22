// Quinta-feira 17/11/22
// OPeradores: Destructuring #04
function rand([ min = 0, max = 1000]){
    if( min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + max
     return Math.floor(valor)
}
console.log(rand([50, 25]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
console.log(rand())