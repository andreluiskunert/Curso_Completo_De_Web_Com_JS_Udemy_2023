console.log("----Lendo Arquivos-----")
console.log("* Explicar..")
const fs = require('fs')
const caminho = __dirname + '/arquivo.json'
// sincroomo..
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
// assincromo...
fs.readFile(caminho, 'utf-8', (err,  conteudo) => {
   const config =  JSON.parse(conteudo)
   console.log(`${config.db.host} : ${config.db.port} `)
})
///
console.log("Outra forma...")
const config = require('./arquivo.json')
console.log(config.db)
////
console.log("Leitura de  uma pasta...")
fs.readdir(__dirname, (err, arquivos) => {
   console.log('Conteúdo da pasta...')
   console.log(arquivos)
}) 



console.log("The End.")