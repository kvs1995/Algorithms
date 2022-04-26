// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string
const charCount = {}

var characterCount = function(str) {
    let charCount = {};
    for (var i=0; i<str.length; i++) {
        if(!charCount[str[i]]) {
            charCount[str[i]] = 1
        } else {
            charCount[str[i]] = charCount[str[i]] + 1
        }
    }
    return charCount
};

