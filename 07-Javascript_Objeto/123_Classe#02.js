/*
  Sábado 04/02/2023
das 11:15:00 a 11:30:00 h+|-
duração: 9 minutos +|- 
  Ø JSON vs Objeto
  obs.: explicava passo a passo vim seguindo as dicas....
*/
class Avo {
    constructor(sobrenome) {
        this.sobrenome
    }
}
   class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
      }
   }
   class Filho extends Pai {
    constructor(){
        super('Silva')
      }
   } 
   const filho = new Filho
   console.log(filho) // Filho {sobrenome: 'Silva', profissao: 'Professor' }