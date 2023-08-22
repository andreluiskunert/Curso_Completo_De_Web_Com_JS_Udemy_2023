/* 
  Quinta-feira, 16/02/2023
  Das 22:00:00 a 22:10:00 h+|-
  Duração: 10 minutos
  ø  Map#03
  þ Explica como será a aula...
*/
Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray 
}
const carrinho = [
    '{"nome": "borracha", "preco":3.45}',
    '{"nome": "caderno", "preco":13.45}',
    '{"nome": "kit de Lapis", "preco":41.22}',
    '{"nome": "caneta", "preco":7.50}',
]
// Retornar um array apenas com os preços;
const paraObjeto =json => JSON.parse(json)
const apenasPreco = produto => produto.apenasPreco
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado) // [ 3.45, 13.9, 41.22, 7.5]