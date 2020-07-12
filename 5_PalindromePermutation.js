const HashMap = require('./HashMap');

const palindromePermutation = string => {
  const pMap = new HashMap();
  for (let i = 0; i < string.length; i++) {
    pMap.set(string[i], i);
  }
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (pMap.get(string[i]) !== i) {
      count--;
    } else {
      count++;
    }
  }
  if (count > 1) {
    console.log(`${count} characters without corresponding duplicates. Palindrome not possible with the input ${string}`)
    return false;
  } else {
    console.log(`${count} characters without corresponding duplicates. A palindrome is possible with the input ${string}`)
    return true;
  }
}

const test1 = "acecarr";
const test2 = "north";

palindromePermutation(test1);
palindromePermutation(test2);