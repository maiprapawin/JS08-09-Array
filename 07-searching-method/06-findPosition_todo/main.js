// จงหา index ใน tasks ที่มี id เท่ากับ 2

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
// expected result: 1

const arr = tasks.findIndex((taskObj) => taskObj.id == 2);
console.log(arr);
