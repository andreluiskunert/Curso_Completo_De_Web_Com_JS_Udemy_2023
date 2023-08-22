// Terça-feira 13/12/2022

/* feito na paǵina web do Jquery  https://jquery.com/ 
 function f1(){ console.log(this === Window)}
undefined
f1()
false debugger eval code:1:24
undefined
document.getElementsByTagName('body')[0].onclick = f1
function f1()
​
arguments: null
​
caller: null
​
length: 0
​
name: "f1"
​
prototype: Object { … }
​
<prototype>: function ()

false 6 debugger eval code:1:24
function f2(){ console.log(this === document)}
undefined
f2()
false debugger eval code:1:24
undefined
document.getElementsByTagName('body')[0].onclick = f2
function f2()
​
arguments: null
​
caller: null
​
length: 0
​
name: "f2"
​
prototype: Object { … }
​
<prototype>: function ()

false debugger eval code:1:24
const body = document.getElementsByTagName('body')[0]
undefined
function  f2() {console.log(this === body)}
undefined
document.getElementsByTagName('body')[0].onclick = f2
function f2()
​
arguments: null
​
caller: null
​
length: 0
​
name: "f2"
​
prototype: Object { … }
​
<prototype>: function ()

true debugger eval code:1:25
const f3 = () => console.log(this === window)
undefined
true debugger eval code:1:25
document.getElementsByTagName('body')[0].onclick = f3
function f3()
​
length: 0
​
name: "f3"
​
<prototype>: function ()

true debugger eval code:1:26
this === window
true

​

 */