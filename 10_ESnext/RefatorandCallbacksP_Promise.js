console.log("----------Refatorando Callbacks Para Promise-----------")
// Com Promise....
    const http = require('http')
const { resolve } = require('path')
     const getTurnma = letra => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
          return new Promiseresolve, reject => {
             http.get(url, res => {
              let resultado = ''
               res.on('data' , dados => {
                 resultado += dados
               })
               res.on('end', () => {
                 try {
                   resolve(JSON.parse(resultado))
                 } catch(e) {
                   reject(e)
                 }
               })
            })
          }

       /*    let nomes = [] 
          getTurnma('A').then(alunos => {
     /// console.log(alunos[0].nome)
     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
     console.log(nomes) })
    
        getTurnma('B').then( alunos =>{
             nomes = nomes .concat(alunos.map(a => `B:${a.nome}`))
              console.log(nomes)
        })
          getTurnma('C').then (alunos => {
            nomes = nomes.concat(alunos.map(a => `C:${a.nome}`))
          }) */


Promise.all([getTurnma('A', getTurnma('B'), getTurnma('C'))])
 .Then(turnas => [].concat(...turnas))
.Then(alunos => alunos.map(aluno => aluno.nome))
 .Then(nomes => console.log(nomes)
 .catch(e => console.log(e.message))) }
  getTurnma('D').catch(e => message) 
        


console.log("The End")