//  Terça-feira 10 de janeiro de 20223
// Revisão sobre Objeto
/*  Coleção  dinâmica de pares chave/ valor */ 
//----------->  1ª exemplo
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do  preidto'] = 'Gerenica'
produto.preco = 220 
console.log(produto) // { nome: 'caddeira', 'marca do produto:', 'Generica', preço:220 }
delete produto.preco
delete produto['marca do produto']
console.log(produto) // { nome: 'caddeira'}
//------*---------+++---------------> 2ª exemplo
const carro = {
    modelo: 'A4',
    valor:890000,
    proprietario: {
        nome: 'Jean Cardoso',
        idade: 30,
        endereco: {
            logradouro: 'Rua do Aroporto -Pato Branco -PR',
            numero: 753,
        }

    }, 
    condutora : [{
        nome: 'Andriele Ribeiro Cardoso',
        idade: 26
    }], 
    calcularValorSeguro: function(){
        /* 
         Ø OBS: analise os seus cordutores.... 
        */ 
    }
}
carro.proprietario.endereco.numero = 2500
carro['proprietario'] ['endereco'] ['logradouro'] = 'Av. Gigante'
console.log(carro) 
/* 
modelo: 'A4',
    valor:890000,
    proprietario: {
        nome: 'Jean Cardoso',
        idade: 30,
        endereco: {
            logradouro: 'Av. Gigante',
            numero: 2500,
        }

    }, 
    condutora : [{
        nome: 'Andriele Ribeiro Cardoso',
        idade: 26
    }], 
    calcularValorSeguro: function(){
        /* 
 
        }

*/
delete carro.condutora
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
/*
modelo: 'A4',
    valor:890000,
    proprietario: {
        nome: 'Jean Cardoso',
        idade: 30,
        endereco: {
            logradouro: 'Av. Gigante',
            numero: 2500,
        }

    
*/ 
console.log(carro.condutora) 
/*
{ condutora : [{
        nome: 'Andriele Ribeiro Cardoso',
        idade: 26}
*/ 
console.log(carro.condutora.length) // 2
