/* 
 Terça-feira 23 / 01 / 2023
 das 21:57:00 a 22:35:00 h+|-
 Ø Herança #02
 Obs.: 
    Explica a materia... 
*/
// Cadeia de protótipos {prototype chain}
Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: '3'}
console.log(filho.attr0, filho.attr1) // 0 A
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // B C
///  =====> Outra função
const carro ={
    velAtual : 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h `
    }
}
const MustangMach1 = {
    ano: '1973',
    velMax: 324 // Shadowing 
}

const  MustangMach2 = {
    ano : '1975',
    status() {
       return `${this.ano}: ${super.status}`
    }
}
Object.setPrototypeOf(MustangMach1, carro)
Object.setPrototypeOf(MustangMach2, carro)
console.log(MustangMach1) // {ano: 1973, velMax: 250 }
console.log(MustangMach2) // {ano: 1975, status: [Function:status]}

MustangMach2.acelerarMais(100)
console.log(MustangMach1.status()) // ano: 1973 100km/h a 200km/h

MustangMach1.acelerarMais(300)
console.log(MustangMach2.status()) // ano: 1975 300km/h a 324km/h