/////////// Searching in Array ////////////

// ตัวอย่าง arr.indexOf และ arr.includes //

let arr = [NaN, 1, 0, false, 0];
console.log(arr.indexOf(0)); // 2
console.log(arr.indexOf(false)); // 3
console.log(arr.indexOf(null)); // -1 = หาไม่เจอ
console.log(arr.includes(1)); // true
console.log(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN) = หาไม่เจอ
console.log(arr.includes(NaN)); // true (correct) = ถ้าจะหา NaN ให้ใช้ includes แทน

//////////////////////////////////////////

let arr2 = [
  { name: "John", age: 27 },
  { name: "Jo", age: 21 },
  { name: "Jin", age: 25 },
  { name: "Jack", age: 21 },
];

// เจอแล้วจบ ใช้ find
// const foundPerson = arr2.find((personObj, index, arr) => {
//   console.log(personObj);
//   if (personObj.age === 21) {
//     return true;
//   }
//   // มันทำแค่ 2 รอบ เพราะเจอตอนครั้งที่สองแล้วเจอ เลยจบ
//   // รอบแรกไม่เจอ return undefined
// });

//// Version 2 ////
const foundPerson = arr.findIndex((p) => p.age === 21);
console.log(foundPerson);

// ถ้าอยากหาให้จนครบจบทุกคน ไม่หยุด ใช้ filter

// const foundPerson = arr2.filter((personObj, index, arr) => {
//   console.log(personObj);
//   if (personObj.age === 21) {
//     return true;
//   }

// });
// console.log(foundPerson);
