const players = [75, 65, 67, 72, 55, 59]
//  const selected = players.find(p => p > 70)
 const selected = players.find(p => p > 80)
console.log(selected)

/** 
 * 1: map
 * 2: foreach
 * 3: filter
 * find
 * reduce
 * 
*/

const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous,current) => previous + current, 0)
console.log(total)

const sum = numbers.reduce((p,c) => p + c, 0)

console.log(sum)



