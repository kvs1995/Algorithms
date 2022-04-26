// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
  let root = 0;
  let square;
  let result = false;
  while(root<=9) {
    square= root*root
    square === num ? result = !result //console.log(`Root: ${root}; Square:${square}; Num: ${num}; Result: TRUE`)//
      // : (square < num ) ? result// console.log(`Root: ${root}; Square:${square}; Num: ${num}; Result: FALSE`) ;
      : result;
    root++;
  } 
  return result
};