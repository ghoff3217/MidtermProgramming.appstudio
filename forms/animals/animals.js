let myAnimals = ['dog', 'cat', 'horse', 'meerkat']
let userAnimal = prompt('Enter any animal name').toLowerCase()

myAnimals.push(userAnimal)
console.log(`The last animal is a/an ${myAnimals[myAnimals.length - 1]}`)