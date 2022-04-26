// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  let isAPalindrome = true;
  let i=0;
  while (i < str.length && isAPalindrome ) {
    str[i] === str[str.length-i-1] ? isAPalindrome = true : isAPalindrome = false
    i++;
  }
  return isAPalindrome
};
