console.log("Operador Rest/Spread....")
console.log("USar spread com objeto:")
const funcionario = { nome: 'André Luis', salario: 17500.00  ,profissao:'Progaramdor Javas Senior'}
const clone = { ativo: true, ...funcionario}
console.log(clone)
// Usasr Spread em array 
console.log("Usasr Spread em array :")
const grupoA = [ 'Lucas Camargo', 'Luis Carlos ', 'André Luis']
const grupoFinal = ['Jean Cardoso', ...grupoA,'Juninho'] 
console.log(grupoFinal)
console.log("The End")
