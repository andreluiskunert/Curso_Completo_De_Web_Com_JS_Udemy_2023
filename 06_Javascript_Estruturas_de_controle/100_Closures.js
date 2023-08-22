// Terça-feira, 27 /12/2022
// Closures
const x ='Global'
function fora(){
    const x = 'Local'
    function dentro() {
        return x

    }
    return dentro  
}
const MinhaFuncao =  fora()
console.log(MinhaFuncao()) //  Local 