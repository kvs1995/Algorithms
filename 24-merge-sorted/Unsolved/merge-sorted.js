// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
  let sortedArray = [];

  let newArray = arr1.concat(arr2)//.sort((num1, num2) => num1-num2)

  // while (i < newArray.length) {
  //   if (newArray[i] > newArray[i+1]) {
  //     newArray.concat(splice(i,1))
  //     newArray.splice(i,1)
  //     console.log(newArray)
  //   } else (newArray[i] < newArray[i+1]) {
  //     i++
  //   }
  // }
  for (let i=0; i >= newArray.length;i++) {

    for (let j=0; j>= newArray.length;) {
      if (newArray[i] > newArray[j]) {
        newArray.concat(splice(i,1))
        newArray.splice(i,1)
        console.log(`Index (i) ${newArray[i]} is greater than Index (j) ${newArray[j]} `)
        j = 0
      } else {
        j++;
      }
    }
  }
};
var arr1 = [3, 4, 8, 10, 13];

// console.log(arr1.slice(2,3))
var arr2 = [8, 14, 40, 41, 43, 50, 12, 13, 20, 51]
// console.log(arr2.concat(arr2.slice(5,6)))

// console.log(arr2.splice(5,1))
// console.log(arr2)
// console.log(arr2.slice(5,6))
mergeSorted( [3, 4, 8, 10, 13],[])
console.log(mergeSorted( [8, 14, 40, 41, 43, 50],[12, 13, 20, 51]))