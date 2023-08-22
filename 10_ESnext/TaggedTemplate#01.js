console.log("------- Tagged Template #01-------")
// tagged template - processo do template dentro  de uma função
function tag(partes,...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String...'
}
  const aluno ='André Luis'
  const situacao = 'Aprovado'
  console.log(tag `${aluno} está ${situacao};`)
console.log("The End.")