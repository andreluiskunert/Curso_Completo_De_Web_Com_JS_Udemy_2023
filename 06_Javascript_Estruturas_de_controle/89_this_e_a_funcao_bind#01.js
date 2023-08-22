// Sábado 18/12/2022
const pessaoa= {
    saudacao:'Good Morning;' ,
  falar() {
    console.log(this.saudacao)

    }
}
pessaoa.falar() // Good Morning
falar()// gerrar um problema "Undefined" confltoo entre OO fucional
const falaDePessoa = pessoa.falar.bind(pessaoa)
falarDePessoa() // Good Morning;
