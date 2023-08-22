// Terça-feira, 20 / 12 / 2022
// Funções Anônimas 
const soma = function (x, y){
    return x +y  }
    const imprimirResultado = function (a, b, operacao = soma) {
        console.log(operacao(a, b))
    }
    imprimirResultado(3, 4) // 7 
    imprimirResultado(3, 4, soma) // 7
    imprimirResultado(3, 4, function (x, y) { return x -y })  //  -1
    imprimirResultado(3, 4, (x, y) => x = y) //  12   
   // Função Anonima dentro de objeto
   const Linda = {
    falar : function (){
        console.log("Sidineia  ou  Sidiane")
     }
   }
   Linda.falar() // Sidineia  ou  Sidiane 