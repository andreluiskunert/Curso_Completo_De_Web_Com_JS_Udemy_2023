//  Quinta-feira,12 de janeiro de 2023
/* das 22:05:00 a 22:45:00 h+|-
  obs.: Explica como será...
*/
// Usando a notação Literal  1ª formula
const obj1 = {}
console.log(obj1) // {}
// Object em JS 2ª formula
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2) // function object {}
// Funções construtoras 3ª formula
function Produto(nome, preco, desc) {
    this.nome = nome 
    this.getPrecComDesconto = () => {
        return preco * (1 - desc)
    }
} 
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.15 )
console.log(p1.getPrecComDesconto(), p2.getPrecComDesconto())
/* 
  6.7915  2249.2425
*/ 
// função factory 4 ª formula
function criarFuncionar(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionar('João', 7980, 04) // 6916 
const f2 = criarFuncionar('Maria', 11400, 01) // 11020 
//  Object.create 5ª formula
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha) // {nome: 'Ana' }
// Um função famosa que retorna Objeto...
const fromJSON =  JSON.parse('"info":"Sou um JSON"') 
console.log(fromJSON.info) // Sou un JSON