const person = {
  name: 'busi',
  age: 23,
}

// Take everything that a person has and add another property. We can also change the property
const person2 = { ...person, class: '10th' }
console.log(person)
console.log(person2)
// This makes a shallow copy. For example

const car = {
  name: 'Fiat',
  features: {
    tyres: 4,
    doors: 4,
  },
}

const car2 = { ...car }
car2.features.doors = 2 //This modifies the data in car also. Objects inside objects are just passed as a reference during shallow copy
console.log(car)
console.log(car2)

// Let us discuss deep copy
const laptop = {
  ram: '4GB',
  monitor: {
    screen: '1080p',
    width: '45inches',
  },
}
const laptop2 = {
  ...laptop,
  monitor: {
    ...laptop.monitor,
    screen: '720p', //Changes the prroperty and also makes a deep copy
  },
}
console.log(laptop)
console.log(laptop2)
