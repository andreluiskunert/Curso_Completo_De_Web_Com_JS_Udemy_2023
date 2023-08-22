// Terça-feira, 27 /12/2022
// Contexto Lèxico
const valor = 'Global'
function MinhaFuncao() {
  console.log(valor)
}
function exec(){
    const valor = 'local'
    MinhaFuncao()
}
exec() // Global

