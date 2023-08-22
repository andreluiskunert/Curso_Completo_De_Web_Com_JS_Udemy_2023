// Quinta-feira 08  de dezembro de 2022 
// -> Break -> causa para fora do lanço corremte
const nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]
for( x in nums){
    if( x== 5)  { break 
}
  console.log(`${x } = ${ nums[x]}`)
}
    //-> Continue -> para a corrente e pula e continua
for(y in nums)
    if(y == 5)   {
        continue
    } 
    
        console.log(`${y} = ${nums[y]}`)
 
 // -> Rotulo
 /* externo: for (a in muns)
    for(a in nums){
        if(a == 2 && b  == 3)
        break externo 
        console.log( `Par = ${a}, ${b} `) 
        NÃO use 

    } */
 
   