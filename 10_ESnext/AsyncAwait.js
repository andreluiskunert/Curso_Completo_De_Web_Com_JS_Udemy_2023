console.log(" Async / Await ")
console.log("*Explica como funciona...")
const http = require('http')
     const getTurnma =  letra  => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
         http.get(url, res =>{
            let resultado = ''
              res.on('data',  dados => {
                resultado += dados
              })
                 res.on('end', ()=> {
                    try{
                       resolve(JSON.parse(resultado))}
                    catch(e) {
                        reject(e)
                    }
                    
                 })
         })
     }
     // Recurso do ES08
     // Objectivo de Simplicar o uso de promises
     let obterAlunos = async () => {
        const tA = await getTurnma('A')
        const tB = await getTurnma('B')
        const tC = await getTurnma('C')
         return [].concat(tA, tB, tC)
     } // Retorna um objetos AsyncFunction
     obterAlunos()
       .then (alunos => alunos.map(a => a.nome))
       .then(nomes => console.log(nomes))
     

     
console.log("The End.")