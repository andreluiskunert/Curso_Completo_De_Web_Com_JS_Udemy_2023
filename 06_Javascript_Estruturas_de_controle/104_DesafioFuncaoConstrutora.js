/*terça-feira 03 / 01 / 2023 
 Desafio Função Construtora
*/
 function pesaoa(nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
     ///   console.log(`Meu nome é ${this}`)

    }
 }
 const p1 = new pesaoa('André Luis ')
 p1.falar() // Meu nome é André Luis 
 // console.logg(p1.nome) // André Luis