function isPalindrome(word) {
  // Write your algorithm here

    for (let i = 0; i < word.length / 2; i++) {

        // check if first and last string are same
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

/* 
  Add your pseudocode here

  Declare a function that accepts string
split the string into half
iterate over each letter in the string:
  if letter is not equal the letter in the second half:
    return false
return true

*/

/*
  Add written explanation of your solution here
  1. Declare a function that accepts one argument, a string.
  2. for loop for checking if the word is Palindrome or not
  3. split the word into two halfs and compare the letters if they match it is a Palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
