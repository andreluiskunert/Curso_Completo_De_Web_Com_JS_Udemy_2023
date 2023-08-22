// Segunda-feira 21 de novembro de 2022
// Operadores: Lógicos
/* v e v -> v
v e f  -> f
f e f -> f 
------------
v ou ? -> v
f ou  f -> v 
f ou  f -> f 
 -----------
 v xor v -> f
 v xor f -> v
 f xor  v -> v
 f xor  f ->  f
 ----------
 !v -> f
 !f -> v 

*/
function compras(trabalho1, trabalho2){
        const ComprarSorvete = trabalho1 || trabalho2
        const ComprarTV50 = trabalho1 && trabalho2 
        // const ComprarTV32 = !!(trabalho1 ^ trabalho2) // Bitwise xor
        const  ComprarTV32 = trabalho1 != trabalho2
        const manterSaudavel = !ComprarSorvete // OPera unario
        return{ ComprarSorvete, ComprarTV50, ComprarTV32, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
