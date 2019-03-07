/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. A palindrome
is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome
does not need to be limited to just dictionary words.
*/

/*
Assumptions:
1. Function is not case sensitive
2. Characters are of the english alphabet
*/

const palindromePermutation = (string) => {
  // initialize empty object variable named counterHash
  let counterHash = {};
  // initialize number variable to 0 named oddCount
  let oddCounter = 0;
  // trim whitespaces on string
  string = string.trim();
  // split the string by space and join the string with no delimiters and make all lowercase
  string = string.split(' ').join('').toLowerCase();
  // check if the length of the string is even or odd
  // if the string has even length
  if (string.length % 2 === 0) {
    // for loop
    for (let i = 0; i < string.length; i += 1) {
      // create counter hash
      counterHash[string[i]] = counterHash[string[i]] + 1 || 1;
    }
    // for in loop
    for (let key in counterHash) {
      // if any value of the key is not % 2 === 0
      if (counterHash[key] % 2 !== 0) {
        //return false
        return false;
      }
    }
  }
  // if the string has odd length
  if (string.length % 2 !== 0) {
    // create for loop
    for (let i = 0; i < string.length; i += 1) {
      // create counter hash
      counterHash[string[i]] = counterHash[string[i]] + 1 || 1;
    }
    // for in loop
    for (let key in counterHash) {
      // if check if there are more than one odd amount characters
      if (oddCounter > 1) {
        // return false
        return false
      }
      // if there is a value that is odd
      if (counterHash[key] % 2 !== 0) {
        // increase count by 1
        oddCounter += 1;
      }
    }
  }
  // return true
  return true;
};

// Tact Coa => True (taco cat, atco cta)
// aaabbb => False (character occurrences cannot have more than one set of odd numbers)

// test cases
const argument = 'Tact Coa';
const argument2 = 'aaabbb';
const actual = palindromePermutation(argument);
const expected = true;
const actual2 = palindromePermutation(argument2);
const expected2 = false;
const testCase = 'Check if string is both a permutation and palindrome';
const testCase2 = 'Function returns false if there is more than one set chacracters with odd numbers'

const assertEquals = (actual, expected, testCase) => {
  if (actual !== expected) {
    return `ERROR ${testCase}: Expected ${expected} but got ${actual}`;
  }
  return 'Passed'
};

const answer1 = assertEquals(actual, expected, testCase);
const answer2 = assertEquals(actual2, expected2, testCase);

console.log(answer1);
console.log(answer2);

/*
Notes:
1. Be careful with the statement "counterHash[string[i]] = counterHash[string[i]] + 1 || 1;" Make sure to use
counterHash[string[i]] + 1 || 1 and NOT counterHash[string[i]] = counterHash[string[i]] += 1 || 1; because it will
return NaN
2. Beware of boolean statements and double check if it fits the logic of the pseudocode.
 */