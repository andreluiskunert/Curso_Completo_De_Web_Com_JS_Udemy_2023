//Quinta-feir a29/12/2022
// Função Factory #02
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto:0.1,

    }
}
console.log(criarProduto('Celular MotorolaOne', 15000,00))// {nome: 'Celular MotorolaOne',  15000,00, desconto: 0.1)}
console.log(criarProduto('notebook lenovo ThinkPad', 18000,00))// {nome: 'notebook lenovo ThinkPad',  1800,00, desconto: 0.1)}