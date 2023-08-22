// Terça-feira 29 de novembro de 2022
function soBoaNoticia(nota){
 if(nota >= 7) {
    console.log("Aprovado com " , + nota)
 }
}
soBoaNoticia(8.1) // Aprovadoo com 8.1
soBoaNoticia(6.1)
///---*-***-*********
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("È verdade..." + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null) // falso
seForVerdadeEuFalo(undefined) // falso
seForVerdadeEuFalo(NaN) // falso
seForVerdadeEuFalo('') // falso
seForVerdadeEuFalo(0) // falso unico numero que é falso
seForVerdadeEuFalo(-1) // È verdade ... -1
seForVerdadeEuFalo(' ') // È verdade ...
seForVerdadeEuFalo('?') // È verdade ... ?
seForVerdadeEuFalo([]) // È verdade ... []
seForVerdadeEuFalo([1, 2]) //  È verdade ... 1,2 
seForVerdadeEuFalo({}) // È verdade ... [Object Object]