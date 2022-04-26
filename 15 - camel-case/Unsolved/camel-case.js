// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  let listString = []
  listString.push(str[0].toLowerCase())
  for (let i=1; i < str.length; i++) {
    str[i-1] === " " ? listString.push(str[i].toUpperCase())
    : str[i] === " " ? console.log("Oooh a space")
    : listString.push(str[i])
  }
  return listString.join("")
};
