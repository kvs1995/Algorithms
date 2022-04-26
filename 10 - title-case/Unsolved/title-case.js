// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  let newString="";
  for (let i=0; i<str.length; i++) {
    str[i-1] === " " ?  newString += str[i].toUpperCase()
    : i === 0 ? newString += str[i].toUpperCase()
    : newString += str[i]
  }
  return newString
};

