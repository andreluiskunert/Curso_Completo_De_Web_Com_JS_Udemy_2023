// Sábado 18/12/2022
function pessoa(){
    this.idade = 0,
    setInterval(function(){
        this.idade++ 
        console.log(this.idade)
    }/* bind(this)*/ , 1000)
}
new pessoa /*
1
2
3
3
4
5
6
7
8
9
10*/ 
 