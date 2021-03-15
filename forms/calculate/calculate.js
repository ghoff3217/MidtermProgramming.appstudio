let num1 = parseInt(prompt('Enter a number'))
let num2 = parseInt(prompt('Enter a number'))
let num3 = parseInt(prompt('Enter a number'))
let calculation = calcAvgSquare(num1, num2, num3)

function calcAvgSquare(n1, n2, n3) {
  return ((n1 + n2 + n3) / 3) * Math.pow(n1, 2)
  }
  
console.log(`The answer is ${calculation}`)