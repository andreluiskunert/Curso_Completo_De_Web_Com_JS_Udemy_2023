/* 
  Quinta-feira, 09/02/2023
  Das 22:00:00 a 22:22:00 h+|-
  Duração: 22 minutos
  ø Array:Métodos Importantes
*/
const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop() // Massa quebrou o carro!!!
console.log(pilotos)// ['Vettel', 'Alonso', 'Raikkonem' ]
pilotos.push('Verstappen') // O push adiciona outro elemento
console.log(pilotos) // ['Vettel', 'Alonso', 'Raikkonem', 'Verstappen' ]
pilotos.shift() // Remove o primeiro da lista;
console.log(pilotos) // ['Alonso', 'Raikkonem', 'Verstappen' ]
pilotos.unshift('Hamilton') /// adiciona da primeira posição
console.log(pilotos)// ['Hamilton',Alonso', 'Raikkonem', 'Verstappen' ]
// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massas')
console.log(pilotos) // ['Hamilton' 'Alonso', 'Bottas', 'Massas', 'Raikkonem', 'Verstappen' ]
// remover
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos) //  ['Hamilton' 'Alonso', 'Bottas', 'Raikkonem', 'Verstappen' ]
// Slice -> retorna um novo Array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1) // ['Bottas', 'Raikkonem', 'Verstappen' ]
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2) // ['Alonso', 'Bottas', 'Raikkonem' ]
