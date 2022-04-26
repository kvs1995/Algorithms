// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
  let numCount = {}
  let isItUnique = true
  for (let i=0 ; i < arr.length && isItUnique; i++) {
    !numCount[arr[i]] ? numCount[arr[i]] = 1
    : isItUnique = false
  }
  return isItUnique
};
