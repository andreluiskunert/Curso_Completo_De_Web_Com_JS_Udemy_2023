/* 
  Sábado, 11/02/2023
  Das 10:05:00 a 10:21:00 h+|-
  Duração: 14 minutos
  ø Foreach#01
  þ Explica como será a aula...> 
*/
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
    /*
    1) Agatha 
    2) Aldo
    3) Daniel
    4) Raquel
     */
})
aprovados.forEach(nome => console.log(nome)) 
/*
    Agatha 
    Aldo
    Daniel
    Raquel
*/
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
/*
    Agatha 
    Aldo
    Daniel
    Raquel
*/