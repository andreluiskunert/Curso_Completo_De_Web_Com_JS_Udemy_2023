// Sexta-feira 11 de novembro de 2022
// Par nome / valor
const saudacao = 'opa' // contexto léxico 1

function exerc(){
    constsaudacaoo = 'fakaaaa' // contexto léxico 2
    return saudacao
}
// Objetos são grupos anaimados de páres nome/valor
const Cliente = {
    nome:'Peter',
    idade:32,
    peso:90,
    endereco:{
        logradouro: 'Bairo dos Petistas',
        numero :171
    }
}
console.log(saudacao)
console.log(exerc())
console.log(Cliente)