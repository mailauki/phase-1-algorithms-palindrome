function isPalindrome(word) {
  // Write your algorithm here
  function reverse(word) {
    return word.split('').reverse().join('')
  }
  if(word === reverse(word)) {
    return true
  }
  else return false
}

/* 
  Add your pseudocode here

  takes a string as an input
  flips the string input
    makes string into array of letters
    reverses the order of letters
    makes array of letters a string again
  compares flipped string with original string input
  if flipped and original string match
    return true
  else return false
*/

/*
  Add written explanation of your solution here

  Input: "madam"
  Result: "madam"
  Output: true
  
  Input: "robot"
  Result: "tobor"
  Output: false

  intializing a word in the isPalindrome function will compare that word with itself in reverse, and return true or false based on if the word matches or not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("For: racecar")
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("For: robot")
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("For: madam")
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("For: palindrome")
  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;
