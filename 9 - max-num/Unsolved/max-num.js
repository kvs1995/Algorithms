// Write code to return the largest number in the given array

var maxNum = function(arr) {
  let maxNumber = 0;
  arr.map(num => {
    num > maxNumber ? maxNumber = num : maxNumber = maxNumber
  })
  return maxNumber
};
