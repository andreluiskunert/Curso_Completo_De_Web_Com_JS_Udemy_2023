console.log("----Map---------")
const tecnologia = new Map()
tecnologia.set('react',{framework: false})
tecnologia.set('angular', {framework:true})
 console.log(" Tecnologia.react é ", tecnologia.react, ",essa é a incorreta...;")
 console.log("a forma correta {tecnologia.get('react') }para obter o valor é", tecnologia.get('react') ,";")
 ///
 const chavesVariadas = new Map([
  [function () {} , 'Função' ] ,
  [{}, 'Objeto'],
  [753, 'Número'] ,
])
chavesVariadas.forEach((vl, ch)=> {
    console.log(ch, vl)
})
console.log(chavesVariadas.has(753))
chavesVariadas.delete(753)
console.log("Achave está presente é ",chavesVariadas.has(753)  ," acho que não;")
console.log( "Qual é o tamanho da chave variada" , chavesVariadas.size , ";" )
chavesVariadas.set(753, 'a')
chavesVariadas.set(753,  'b')
console.log(chavesVariadas)
console.log("The End.")