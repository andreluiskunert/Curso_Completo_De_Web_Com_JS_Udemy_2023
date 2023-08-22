// Segunda-feira 28 de novembro de 2022
// Tratamento de erro (try/ Catch / Throw)
// Obs.: Faz varios comentarios sobre JS 
// das 22:12:00 a 22
function tratarEtrrorELancar(erro){
//  throw new Error("Não se preocupe o suporte já foi notificado")
throw  {
      nome : erro.name,
      msg: erro.mensage,
      date: new Date
}
}
function imprimirGritado(obj)
   try {console.log(obj.name.toUpperCase() + '!!!') }   
catch(e){
    tratarEtrrorELancar(e)
} finally {
    console.log('Final')
}
const obj = { name: 'André Luis'}
imprimirGritado(obj)