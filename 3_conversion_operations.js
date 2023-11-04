// in such type of operations if first operand is string then every other operand will be converted to string
// basically after string operand every other operand that is after string operand will be treated as a string operand only.
// https://www.youtube.com/watch?v=sscX432bMZo 1:22 time stamp

console.log(1 + 1)
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")
console.log(1+2+"3"+4+5)

console.log(+true) // it will return 1 as it is converted into num
console.log(typeof +true)

console.log(+"") // this will be converted to 1 number
console.log(typeof "")
console.log(typeof +"")


let gameCounter = 100
gameCounter++ // postfix operator

console.log(gameCounter)
++gameCounter  // prefix operator
console.log(gameCounter)

