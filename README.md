# DSA-Hashmaps

### 1_Create HashMap Class
[1A - Export HashMap Module](./HashMap.js)
[1B - 1I](./HashMaps_drills.js)

### 2_What Does this Do?
DO  NOT run the following code before solving the problem.

What is the output of the following code? explain your answer.

```
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
```

##### Answer:
- This code creates two unique HashMaps (map1, and map2), and sets 2 key:value pairs each. However, each key is identical, so the second time a value is set, it overwrites the previous value set to that particular key. Then, it logs the output of one key per map.
- Output is 20, 10

### 3_ Demonstrate Understanding of HashMaps
- #### 3A
-- Show your HashMap after the insertion of keys [10, 22, 31, 4, 15, 28, 17, 88, 59] into a hash map of length 11 using open addressing and a hash function k mod m where k is the key and m is the length;
- #### 3B
-- Show your hash map after the insertion of the keys [5, 28, 19, 15, 20, 33, 12, 17, 10] into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m

##### Answer:
![Photo](./imgs/3_DemonstrateUnderstanding.jpg)

### 4_Remove Duplicates
[LINK](./4_RemoveDups.js)

### 5_Any Permutation in a Palindrome
[LINK](./5_PalindromePermutation.js)

### 6_Anagram Grouping
[LINK](./6_AnagramGrouping.js)

### 7_Separate Chaining
[LINK](./7_SeparateChainingHashMap.js)