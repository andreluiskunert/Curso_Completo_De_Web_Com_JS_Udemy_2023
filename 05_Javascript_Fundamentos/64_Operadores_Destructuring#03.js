// Quinta-feira17/11/22
// OPeradores: Destructuring #03
function rand ({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}
const obj= {max: 50, min: 25}
console.log(rand(obj))
conmsole.log(rand({min: 955}))
console.log(rand({}))
console.log(rand()) // Undfeinid