const numbers = [1, 3, 4, 5]

// adding a number
const numbers2 = [...numbers, 6]

// adding at a particular index
index = numbers2.indexOf(3)
const numbers3 = [...numbers2.slice(0, index), 2, ...numbers2.slice(index)]

// Removing
const removed = numbers3.filter((n) => n != 3)

// Updating if n is 2, then 20 else n
const updated = numbers3.map((n) => (n === 2 ? 20 : n))

console.log(numbers)
console.log(numbers2)
console.log(numbers3)
console.log(removed)
console.log(updated)
