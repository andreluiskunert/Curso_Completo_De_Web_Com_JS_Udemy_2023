console.log("----- Padrão Middleware#02----")
console.log("Explicar sobre o assunto... e faça demonstração")
console.log(" Vai fazendo o exercicios é expicando.. ")
const passo1 =(ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}
   const passo2 = ( ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
  }
    const passo3= ctx => ctx.valor3 = 'mid3'
    const exec = (ctx,...PadraoMiddleware02) => {
        const execPasso = indice => {
            PadraoMiddleware02 && indice < PadraoMiddleware02.length &&
            PadraoMiddleware02 [indice](ctx, () => execPasso(indice +1 ))
        }
        execPasso(0)
    }
    const ctx = {}
     exec( ctx, passo1, passo2, passo3)

console.log("Vamos ver o resultado...é o resultado é ", ctx, ".")
console.log("The End.")