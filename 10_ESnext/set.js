console.log("Set")
const times = new Set()
times.add('vassco')
times.add('sao paulo').add('palmeira').add('corithians')
times.add('flamengo')
times.add('vasco')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))
const nomes = ['jean', 'Luis',  'Lucas', 'Andre', 'Lucas', 'jean']
const nomesSet = new Set(nomes)
console.log(nomesSet)
console.log("The End.")