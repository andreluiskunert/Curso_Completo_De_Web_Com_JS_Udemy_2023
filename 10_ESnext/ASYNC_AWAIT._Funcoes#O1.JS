console.log("ASYNC/AWAIT/Funções #01 ")
 // Funções 
 function esperarPor(temppo = 2000) {
    return new Promise(function(resolve){
        setTimeout(()=> resolve(), temppo)
    })
 }
 esperarPor(2000)
    .then(() => console.log('Executando promise. 01..'))
    .then(esperarPor)
    .then(() => console.log('Executando promise..02.'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...03'))
/*  await esperarPor(3000)
 SyntaxError: await is only valid in async function
    at wrapSafe (internal/modules/cjs/loader.js:915:16)
    at Module._compile (internal/modules/cjs/loader.js:963:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47 */
// ASYNC / AWAIT
 function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
 }
  async function executar(){
    /* //  console.log(executar)
    ASYNC/AWAIT/Funções #01 
[Function: executar]
The End.
Executando promise. 01..
Executando promise..02.
Executando promise...03 */
     let valor = await retornarValor()
     await esperarPor(1000)
     console.log(`Async/Await 1 ${valor}`)
     await esperarPor(2000)
     console.log(`Async/Await 2 ${valor + 1} `)
     await esperarPor(3000)
     console.log(`Async/Await 3 ${valor + 2 }  `)
        return valor * 3 
    async function executarDeVerdade(){
    const valor= await executar()
       console.log(valor)
 }
}
    executarDeVerdade().then(console.log)
    
    
console.log("The End.")