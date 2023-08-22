// Segunda-feira 16/01/2023
// Notação Literal
// das 22:07:00 a 
const b = 2;
const c = 3;
const obj1 = {a: a, b: b, c: c}
const obj2 ={a, b, c}
console.log(obj1, obj2) // {a: 1, b: 2, c: 3} {a: 1, b: 2, c: 3 }
///
const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3) // {nota: 7.87}
///
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4) // {nota: 7.87}
///
const obj5 = {
    funcao1: function() {
        //----
    },
    funcao2() {
        // ---> EC2015 
    }
}
console.log(obj5) // {funçao1: [function:funcao1, funcao2:[function: funcao2]]}