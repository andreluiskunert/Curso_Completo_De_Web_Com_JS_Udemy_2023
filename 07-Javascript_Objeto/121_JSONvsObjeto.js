/*
  Sexta-feira 03/02/2023
das 22:15:00 a 22:41:00 h+|-
duração: 20 minutos +|- 
  Ø JSON vs Objeto
  obs.: explicava passo a passo vim seguindo as dicas....
*/
const obj = {a: 1, b: 2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // {a: 1, b:2, c:3 }
// console.log(JSON.parse("{a: 1, b:2, c:3}"))
/*
  Sexta-feira 03/02/2023
das 22:15:00 a 22:41:00 h+|-
duração: 20 minutos +|- 
  Ø JSON vs Objeto
  obs.: explicava passo a passo vim seguindo as dicas....
*/
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3')); // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))// "a": 1, "b": "string", "c": true, "d": {}, "e": []} 

