/* console.log(".....Promise #05 ...")
console.log("Explicar um pouquinho há sobre o assunto...")
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject )=> {
       try {
        if(Math.random() < chanceErro){
            reject('Ocorre um erro!')
        }else{
            resolve(valor)
        } catch(e) {
            reject(e)
        }
       })
}
   
funcionarOuNao('Testando...', 0.9)
.then(v => console.log(`valor: ${v}`))
.catch(err => console.log(`Erro: ${err}`))
.then(() => console.log("The End.")) */





