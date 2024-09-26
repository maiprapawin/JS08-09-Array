// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

const alphabets = ["a", "b", "a", "c", "a", "d"];
// expected result: [0, 2, 4]

///////// อันนี้เจอแล้วจบ ////////
// const a = alphabets.findIndex((item) => item == "a");
// console.log(a); // 0

//////////////////////////////////////////////////

///////////////// Version 1 /////////////////
// const resultArr = [];
// for (let index in alphabets) {
//   console.log(index, alphabets[index]);
//   // 0 a
//   // 1 b
//   // 2 a
//   // 3 c
//   // 4 a
//   // 5 d

//   if (alphabets[index] === "a") resultArr.push(+index);
// }

// console.log(resultArr); // [0, 2, 4]

///////////////// Version 2 /////////////////
const resultArr = [];

alphabets.forEach((char, index) => {
  if (char === "a") resultArr.push(+index);
});

console.log(resultArr); // [0, 2, 4]
