// Terça-feira 29 de novembro de 2022
function teste1(num){
    if(num > 7) 
    console.log(num)
    console.log('Final')
}
/* teste1(6) //  -> Fianl 
          // -> 8
teste1(8)// ->  Final */
/// ****-------/***** */
function teste2(num) {
    if(num > 7); { // Cuidado com O ";", não usar com as estruturas de controle  
        console.log(num) 
    }
}
teste2(6) // -> 6
teste2(8) // -> 8
