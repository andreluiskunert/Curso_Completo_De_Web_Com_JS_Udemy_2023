/* 
  Segunda-feira, 13/02/2023
  Das 21:22:00 a 21:35:00 h+|-
  Duração: 15 minutos
  ø  Map#02
  þ Explica como será a aula...> 
*/
const carrinho = [
    '{"nome": "borracha", "preco":3.45}',
    '{"nome": "caderno", "preco":13.45}',
    '{"nome": "kit de Lapis", "preco":41.22}',
    '{"nome": "caneta", "preco":7.50}',
]
// Retornar um array apenas com os preços;
const paraObjeto =json => JSON.parse(json)
const apenasPreco = produto => produto.apenasPreco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado) // [ 3.45, 13.9, 41.22, 7,50]