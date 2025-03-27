function isPalindrome(word) {
  // Write your algorithm here
  let revertedString = '';
  for(let i = word.length-1; i >= 0; i--){
      revertedString += word[i];
  }

  if(revertedString === word){
    return true;
  }else{
    return false;
  }
  
}

/* 
  Add your pseudocode here
  Create a variable of type string with let keyword and assign it to an empty string
  Create a for loop to iterate through the input, let it be of a descending format
  Add each element of the input(now from last index to start index) to the variable
  If variable is equal to input return true, else return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome('madam'));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome('rayana'));
}

module.exports = isPalindrome;
