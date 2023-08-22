/*
  Sábado 04/02/2023
das 10:58:00 a 11:14:00 h+|-
duração: 9 minutos +|- 
  Ø JSON vs Objeto
  obs.: explicava passo a passo vim seguindo as dicas....
*/
class Lancamento {
    constructor(nome = 'Generico' , valor = 0 ){
        this.nome = nome
        this.valor = valor
    }
}
 class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento
    }
   addLancamentos(...lancamentos) {
     lancamentos.forEach(l => this.lancamentos.push(l))
   }
   sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
        valorConsolidado += l.valor
    })
    return valorConsolidado
   }
}
const salario = new Lancamento('Salario', 45000)
const ContaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos()
console.log(contas.sumario()) // 44780 