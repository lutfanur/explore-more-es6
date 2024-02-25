const numbers = [1, 5, 6, 4, 15];
const result = numbers.forEach(n=> n * 2)
// console.log(result)

const players = [75, 65, 67, 72, 55, 59]
// const selected = players.filter(p => p > 70)
// const selected = players.filter(p => p > 80)
//  const selected = players.filter(p => p > 50)
//  const selected = players.filter(p => p > 50)
const selected = players.filter(p => p % 2 === 1)
// console.log(selected)

const friends = ['Tom', 'Jhon', 'Oliver', 'Romadiana', 'Tim', 'Jhosna']
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);