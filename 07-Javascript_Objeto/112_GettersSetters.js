// Terça-feira, 17/01/2023
// das 22:35:00 a 22:46:00 h+|-
// Getters / Setters
const sequencia = {
    _valor: 1, // Convenção
    get valor() {return this._valor++ },
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor) // 1 2
sequencia.valor = 1000 // 1000 1001
console.log(sequencia.valor, sequencia.valor) 
sequencia.valor = 900 // 1002 1003
console.log(sequencia.valor, sequencia.valor)
