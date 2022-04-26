// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  if (strA.length !== strB.length) {
    return false
  } else {
    let strACount = {}
    let sum =0;
    for (var i = 0; i < strA.length; i++) {
      !strACount[strA[i]] ? strACount[strA[i]] = 1 : strACount[strA[i]] += 1

      !strACount[strB[i]] ? strACount[strB[i]] = -1 :strACount[strB[i]] = strACount[strB[i]] - 1
    }
    for (const key in strACount) {
      if (strACount[key] !==0) {
        return false
      } else {
        sum+=strACount[key]
      }
    }
    const result = sum === 0 ? true : false
    return result
  }
};