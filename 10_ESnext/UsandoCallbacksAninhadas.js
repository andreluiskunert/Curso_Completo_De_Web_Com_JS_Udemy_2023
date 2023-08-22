console.log("----------Usando Callbacks Aninhadas-----------")
// Sem  Promise....
    const http = require('http')
const { get } = require('lodash')
     const getTurnma = ( letra, callback) => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
         http.get(url, res =>{
            let resultado = ''
              res.on('data',  dados => {
                resultado += dados
              })
                 res.on('end', ()=> {
                    callback(JSON.parse(resultado))
                 })
         })
     }
     let nomes = []
      getTurnma['A', alunos => {
        /// console.log(alunos[0].nome)
         nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
           console.log(nomes) }
         
      ]
        getTurnma('B', alunos =>{
             nomes = nomes .concat(alunos.map(a => `B:${a.nome}`))
              console.log(nomes)
        })
          getTurnma('C' , alunos => {
            nomes = nomes.concat(alunos.map(a => `C:${a.nome}`))
          })

console.log("The End")
