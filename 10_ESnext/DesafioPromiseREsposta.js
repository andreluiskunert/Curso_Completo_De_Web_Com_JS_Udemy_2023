console.log("Desafio Promise Resposta")
const fs = require ('fs')
const path = require('path')
function lerAquivo(caminho){
    return new Promise(resolve => {
        fs.readFileSync(caminho, function(__, conteudo) {
            resolve(conteudo.toString())
        })
        console.log("Depois de Ler...")
    })
}
const caminho = path.join(__dirname,  'dados.txt')
lerAquivo(caminho)
  .then(conteudo => conteudo.split('\n'))
  .then(linhas => linhas.join(','))
  .then(conteudo => `Ò valor final é :${conteudo}`)
  .then( console.log)
console.log("The End.")

