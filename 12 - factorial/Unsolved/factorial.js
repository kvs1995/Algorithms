// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  let result = 1
  let count = 1

  if (num === 0) {
    return 1
  } else {
    while (count <= num) {
      result = result * count
      count ++;
    }
    return result;
  }
};
