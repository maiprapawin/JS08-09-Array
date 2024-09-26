const log = console.log;

log("Learn array");

//////////////////////////////////////////////////////////////
////////////////////// 4. Loop for Array /////////////////////
//////////////////////////////////////////////////////////////

///// 4.1 for loop /////

// Imperative ต้องค่อยๆ พรรณา อธิบาย
// กำหนด i เอง มีโอกาสผิดพลาดได้
// ต้องค่อยๆอธิบายโปรแกรมทีละส่วน

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
  // Dog
  // Snake
  //....
  // ....
  // Elephant
}

///// 4.2 for...in /////
// สนใจ index เป็นหลัก

// มอง array เป็น object ประเภทหนึ่งได้
// value = string
// key = index (ตัวเลข)
// <key>: <value>, => <index>: <value>,

/* const arr = {
  0: "Bird",
  1: "Cat",
  2: "Dog";
} */

// for (let key in animals) {
//   console.log(key);
//   // 0
//   // 1
//   // 2
//   // 3
//   // 4
// }

for (let index in animals) {
  console.log(index, animals[index]);
  /*
  1st loop = 0 Snake
  2nd loop = 1 Bird
  3rd loop = 2 Spider
  4th loop = 3 Cat
  5th loop = 4 Elephant
  */
}

///// 4.3 for...of /////
// ถ้าไม่อยากรู้ index
// สนใจ element เป็นหลัก

for (let element of animals) {
  console.log(element);
  /*
  1st loop = Snake
  2nd loop = Bird
  3rd loop = Spider
  4th loop = Cat
  5th loop = Elephant
  */
}

///// 4.4 forEach /////
// ในแต่ละ item เดี๋ยวเราจะ run function นี้ให้จ้าาาาาาาาาา
// SYNTAX: <array>.forEach(FN)
// Callback จะถูกเรียกใช้ (run) ตามจำนวนสมาชิก(element) ของ array

// array === Caller
// Higher Orger FN == forEach (รับ parameter input เป็น function)

const items = ["Football", "Bags", "Dish"];

// items.forEach(----- function() {} ------) >>> เขียนแบบนี้ได้เลย
// Callback จะถูกเรียกใช้ (run) ตามจำนวนสมาชิก(element) ของ array

// items.forEach(function () {
//   console.log("Hi");
//   // console log Hi ออกมา 3 รอบ ตามจำนวนของ array items
// });

/////////// Iterate FN
// function iterateFn() {
//   console.log("Hi"); // ออกมาเหมือนแบบด้านบน คือ Hi 3 รอบ
// }
// items.forEach(iterateFn);

// function iterateFn(a) {
//   console.log(a);
//   /*
// Football
// Bags
// Dish
// */
// }
// items.forEach(iterateFn);

////////////////////////
// const items = ["Football", "Bags", "Dish"];

// const iterateFn = (item) => console.log(item);
// const iterateFn = (element) => console.log(element);
// จะตั้งชื่อว่า element/ item ก็ได้

// items.forEach(iterateFn);
// 1st loop: ("Football") => console.log("Football")
// 2nd loop: ("Bags") => console.log("Bags")
// 3rd loop: ("Dish") => console.log("Dish")

////////////////////////
// const iterateFn = (a, b, c) => console.log(a, b, c);

// items.forEach(iterateFn); // ส่งฟังชั่นไปให้ forEach รัน แล้ว forEach จะตัดสินใจให้เองว่าจะออกมาเป็นอะไร กี่ตัว
// // 1st loop: ("Football", 0, items) => console.log("Football")
// // 2nd loop: ("Bags, 1, items") => console.log("Bags")
// // 3rd loop: ("Dish, 2, items") => console.log("Dish")

////////////////////////

const iterateFn = (item, index, array) => console.log(index, item);
items.forEach(iterateFn);
// ต่อให้ตัวแรกเราจะตั้งชื่อว่าอย่างอื่น loop รอบแรกของ forEach ก็จะยังเป็น item อยู่ดี

////////////////////////
items.forEach((a, b, c) => {
  // console.log(a)
  // at index....., element =....
  console.log(`At index ${b}, element = ${a}`);
  // At index 0, element = Football
  // At index 1, element = Bags
  // At index 2, element = Dish
});
