// จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
// expected result: { name: 'cherries', quantity: 5 }

const cherry = inventory.find((fruitObj) => fruitObj.name == "cherries");
console.log(cherry);
