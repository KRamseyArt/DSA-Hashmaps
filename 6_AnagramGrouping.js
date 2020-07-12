const HashMap = require('./HashMap');

const groupAnagrams = arr => {
  let results = [];
  let aHash = new Map();

  for(let i = 0; i < arr.length; i++){
    let sortedWord = arr[i].split("").sort().join("");
    console.log(sortedWord);

    if (!aHash.has(sortedWord)){
      aHash.set(sortedWord, [arr[i]]);
    } else {
      aHash.get(sortedWord).push(arr[i]);
    }
  }
  return Array.from(aHash.values());
}

const test1 = [
  'east',
  'cars',
  'acre',
  'arcs',
  'teas',
  'eats',
  'race'
]

console.log(groupAnagrams(test1));