// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
  arr.map(num => {
    const fizz = num % 3 === 0
    const buzz = num % 5 === 0
    const fizzBuzzz = fizz && buzz 
    fizzBuzzz ? console.log(("Fizz Buzz")):
    fizz ? console.log(("Fizz")):
    buzz ? console.log(("Buzz")):
    console.log(num)
  })
};
