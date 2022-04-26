// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
  let newArray = [];
  const max1 = Math.max(...arr)
  const max1Index = arr.indexOf(max1)
  arr.map(num => {
    if (arr.indexOf(num) !== max1Index) {
      newArray.push(num)
    }
  })
  const max2 = Math.max(...newArray)
  return max1*max2
};
