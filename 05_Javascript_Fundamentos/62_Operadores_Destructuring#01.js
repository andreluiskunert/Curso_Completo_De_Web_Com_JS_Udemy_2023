// Terça-feira, 15 / 11 /2022
// OPeradores: Destructuring #01
// Novo recursodo ES2015

const pessoa = {
    nome:'Ana',
    idade: 18,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1500
    }
}
const { nome, idade} = pessoa
    console.log(nome, idade)
const { nome: n, idade: i } = pessoa
    console.log(n, i)
const {sobrenome,  bemHumorada = true}= pessoa
    console.log(sobrenome, bemHumorada)
const {endereco:{logradouro,numero, cep}} = pessoa
    console.log(logradouro,numero, cep)
const { comta:{ag, num }} = pessoa
    console.log(ag, num)
