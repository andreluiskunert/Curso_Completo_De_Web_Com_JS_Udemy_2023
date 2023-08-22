console.log(" Revisão 01")
console.log("Explica....")
// let e const
{
    var a = 3
    let b = 7;
    console.log(b)

}
console.log(a)
  /* console.log(b)
/*
console.log(b)
            ^

ReferenceError: b is not defined
    at Object.<anonymous> (/home/analise/Udemy plataforma de estudo online/Curso Completo Web Moderno_Revis__o/10_ESnext/Revisao.js:10:13)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47

*/
// Template String
const produto = 'Notebook'
console.log(`${produto} é caro!!!`)
// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l ,e, ...tras)
const [x, ,y] = [1, 2, 3]
console.log(x, y)
const {idade: i, nome} = {nome: 'Ana', idade: 9 }
console.log(i, nome)
console.log("The End;")
