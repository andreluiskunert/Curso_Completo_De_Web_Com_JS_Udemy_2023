// Segunnda-feira 26 /12 /2022
//  Funçẽos Construtoras 
function Carro(velocidademaxima = 200, delta = 5){
    // atribiuto privaddo
    let velociddadeAtual = 0
    // 1º meetodo publico 
    this.acelerar = function (){
        if(velociddadeAtual + delta <= velocidademaxima) {
            velociddadeAtual += delta
            
        } else{
            velociddadeAtual = velocidademaxima 
        }
    }
    // 2ª Metodo Publico
    this.getVelocidadeAtual = function () {
        return velociddadeAtual
    }

}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // 5
/// Outro Carro
 const ferrari = new Carro(350, 20)
 ferrari.acelerar()
 ferrari.acelerar()
 ferrari.acelerar()
 console.log(ferrari.getVelocidadeAtual())  // 60
 // Relembrando
 console.log(typeof Carro) // Functiion
 console.log(typeof ferrari) //  Object 
 
 
