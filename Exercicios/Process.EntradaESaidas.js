const amonimo = process.argv.indexOf('-a') !==-1
/// console.log(amonimo)
if(amonimo) {
    process.stdout.write('Fala Amonimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome:')
    process.stdin.on( 'data', data => {
        const nome = data.toString().replace('\n','')
        process.stdou.write(`Fala ${nome} !! \n`)
        process.exit()
    })
}