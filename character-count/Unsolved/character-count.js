// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string
const charCount = {}

var characterCount = function(str) {
    //create empty object
    const charCount = {}
    const charArray = str.split("") //initial split of all of the characters
    //for each character in the character array
    charArray.forEach(character => {
        //let count equal the length -1 of the initial string split split at the specific character 
        let count = str.split(character).length - 1


        //create or set a property with the character = key and the count = value
        charCount[character] = count

    } )
    return charCount 
};

console.log(characterCount('Hello World!'))


// examples of the let count = str.split(character).length-1
var str = 'Hello World!'
let H = str.split("H")
let lengthH = str.split("H").length
let countH = str.split("H").length - 1
console.log(H, lengthH, countH) // [ '', 'ello World!' ] 2 1

let l = str.split("l")
let lengthL = str.split("l").length
let countL = str.split("l").length - 1
console.log(l, lengthL, countL) //[ 'He', '', 'o Wor', 'd!' ] 4 3
