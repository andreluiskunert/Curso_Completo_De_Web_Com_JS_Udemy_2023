// Sexta-feira 02 de dezmbro de 2022
const imprimirResultado = function( nota) {
    switch(Math.floor(nota)) {
        case 10:
            case 9:
                console.log('Quadro de Honra')
                break
                case 8: case 7:
                    console.log('Aprovado')
                    break
                        case 6: case 5: case 4:
                            console.log('Recuperação')
                            break
                            case 3: case 2: case 1:
                                console.log('Reprovado')
                                break
                                default:
                                    console.log('nota invalida')
     }
}
imprimirResultado(10) // Quadro de Honra
imprimirResultado(8.9) // Aprovado'
imprimirResultado(6.55) // Recuperação
imprimirResultado(2.3) // Reprovado 
imprimirResultado(-1)  // nota invalida 
imprimirResultado(11)// nota invalida