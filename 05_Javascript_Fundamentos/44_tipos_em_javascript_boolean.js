// Terça-feira,01/11/20222
// Tipos em Javascript : Boolean
let isAtivo = false
console.log(isAtivo)
/////
isAtivo = true
console.log(isAtivo)
///
isAtivo = 1
console.log(!!isAtivo)
///
console.log('Os Verdadeiros....>')
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
///
console.log('Os falsos{Lula_PT}')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('Pra finalizar...')
console.log(!!('' ||  '' || null ||  '' || ''))
///
let nome = 'Lucas'
console.log(nome || 'Desconhecido')