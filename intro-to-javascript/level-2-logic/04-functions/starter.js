// =============================================================
// Level 2 · Task 1 — Functions
// =============================================================

// Example, already done for you:
function double(n) {
  return n * 2;
}
console.log("double(4) =", double(4));


// TODO 1: function square(n) → returns n times n
//         square(5) should give back 25
function sqaure(n) {
  return n * n;
}
console.log("sqaure(5)= ",sqaure(5))
console.log("sqaure(-3)= ",sqaure(-3))

// TODO 2: function celsiusToFahrenheit(c) → returns c * 9 / 5 + 32
//         celsiusToFahrenheit(100) should give back 212
function celsiusToFahrenheit(n) {
  return n * 9 / 5 + 32
}
console.log(`The temp in celsius is 0 , in Fahrenheit is : ${ celsiusToFahrenheit(0)}`)
console.log(`The temp in celsius is 100 , in Fahrenheit is : ${celsiusToFahrenheit(100)}`)

// TODO 3: function greet(name = "friend") → returns `Hello, ${name}!`
//         greet("Sara") → "Hello, Sara!"     greet() → "Hello, friend!"
//         The = "friend" part is a DEFAULT value, used when nothing is passed in.
function greet(name = "friend") {
  return `Hello, ${name}!`
}
console.log(greet("sara"))
console.log(greet());
// TODO 4: An ARROW FUNCTION is a shorter way to write a function:
//         const add = (a, b) => a + b;
//         With no { } the result is returned automatically.
const add = (a, b) => a + b
console.log(typeof add)
console.log(add(2,3))  

// TODO 5: function priceWithTax(price, taxRate = 0.15)
//         → returns the price plus tax
//         priceWithTax(100) → 115     priceWithTax(100, 0) → 100
function priceWithTax(price, taxRate = 0.15) {
  return price + price * taxRate;
}
console.log(priceWithTax(100))
console.log(priceWithTax(100,0))
// Try your functions here:
console.log(square(5), celsiusToFahrenheit(100), greet(), add(2, 3));


// TODO 6: Read this, run it, and answer in a comment:
//         why does `result` show undefined?
function logDouble(n) {
  console.log(n * 2);
}
const result = logDouble(5);
console.log("result is", result);
// Your answer:
//Because the function does not have a return statement
 
//bouns
function isEven(n) {
      if(!(n %2===0)) return false
      return true
      }

      console.log(isEven(4))
      console.log(isEven(7))
