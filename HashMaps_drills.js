// 1b) Create a separate .js file
// import the HashMap module. 
// create a function main()
const HashMap = require('./HashMap');
const ChainMap = require('./7_SeparateChainingHashMap');

// 1c) inside main create a hashmap 'lotr'
function main() {
  const lotr = new HashMap();

  // 1d) set the max load ratio and size ratio
  lotr.MAX_LOAD_RAIO = 0.5;
  lotr.SIZE_RATIO = 3;

  // 1e) add the following items to your hash map
  let addItems = [
    ["Hobbit", "Bilbo"],
    ["Hobbit", "Frodo"],
    ["Wizard", "Gandalf"],
    ["Human", "Aragorn"],
    ["Elf", "Legolas"],
    ["Maiar", "The Necromancer"],
    ["Maiar", "Sauron"],
    ["RingBearer", "Gollum"],
    ["LadyOfLight", "Galadriel"],
    ["HalfElven", "Arwen"],
    ["Ent", "Treebeard"]
  ];

  addItems.forEach(item => {
    lotr.set(item[0],item[1]);
  })

  // 1f) print your hash map and notice the length and items
  //     that are hashed in your map. have you hashed all the
  //     items you were asked to?
  console.log(lotr);
  // 11 items provided - HashMap length: 9
  // Undefined item:
  //  - {"Ent": "Treebeard"}
  // Items missing:
  //  - {"Hobbit": "Bilbo"}
  //  - {"Maiar": "The Necromancer"}

  // 1g) retrieve values hashed in the key 'Maiar' and 'Hobbit'
  lotr.get("Maiar");
  lotr.get("Hobbit");

  // 1h) What are the values you retrieved? is there a discrepancy? explain:
  console.log(lotr.get("Maiar")); // => Sauron
  console.log(lotr.get("Hobbit")); // => Frodo
  // Discrepancy: Despite being provided multiple
  //  values for both 'Maiar' and 'Hobbit' keys,
  //  only the last values provided were saved.

  // 1i) What is capacity of your hash table? explain:
  // Capacity after hashing all items: 8
  // Despite containing 9 items, the capacity is limited to 8,
  // which is probably why {"Ent": "Treebeard"} is labelled
  // undefined, even though it is technically included. Perhaps
  // setting values doesn't effectively alter the capacity.

  console.log(`---- CHAIN HASH MAP TESTS ----`);
  const lotr2 = new ChainMap();
  
  const chainData = [
    { Hobbit: "Bilbo" },
    { Hobbit: "Frodo" },
    { Wizard: "Gandolf" },
    { Human: "Aragon" },
    { Elf: "Legolas" },
    { Maiar: "The Necromancer" },
    { Maiar: "Sauron" },
    { RingBearer: "Gollum" },
    { LadyOfLight: "Galadriel" },
    { HalfElven: "Arwen" },
    { Ent: "Treebeard" }
  ];
  chainData.forEach(obj => {
    const key = Object.keys(obj)[0];
    lotr2.set(key,obj[key]);
  })
  
  console.log(lotr2);

  lotr2.get("Maiar");
  lotr2.get("Hobbit");

  console.log(lotr2.get("Maiar")); 
  console.log(lotr2.get("Hobbit"));
}

main();