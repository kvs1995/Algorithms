// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let count = 0;
  for(let i=0; i<str.length; i++){
    if ("AEIOUaeiou".search(str[i]) !== -1 && str[i] !== "."){
      count++;
    }
  }
  return count;
};


