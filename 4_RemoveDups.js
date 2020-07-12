const HashMap = require('./HashMap');

const removeDups = string => {
  let duplicates = new HashMap();
  let newString = "";

  for (const c of string){
		duplicates.set(c, c);
  }
  
  duplicates._hashTable.forEach(c => {
    newString += c.value;
  });
  console.log(`\nDuplicates removed from\n'${string}:'`);
  console.log(`\t\t${newString}`)
	return newString;
}
const test1 = "google";
const test2 = "google all that you think can think of";

removeDups(test1);
removeDups(test2);