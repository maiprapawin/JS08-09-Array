const log = console.log;

log("Learn array");

//////////////////////////////////////////////////////////////
////////////////////// 1. วิธีสร้าง/ การประกาศ Array ///////////////
///////////////////// Array Declaration /////////////////////
//////////////////////////////////////////////////////////////

// 1.1 Array Literal
// แต่ละตัวจะเรียกว่า element หรือสมาชิก
const friends = ["Money", "Non", "Peakpoon", "Fon"];

// 1.2 Array Constructor
const height = new Array(150, 160, 175);
log(height);

//////////////////////////////////////////////////////////////
/////////////// 2. Access, Modify, Add, Delete ///////////////
//////////////////////////////////////////////////////////////

//// Bracket Notation with Index

/////// 2.1 Access ///////
log(friends[0]); // Money
log(friends[2]); // Peakpoon
log(friends[-1]); // ถ้าเราใส่ index ที่ไม่มีอยู่จริง หาไม่พบ จะเป็น undefined
log(friends[10]); // undefined

/////// 2.2 Modify/ Update ///////
friends[0] = "Gold";
log(friends); // มาทั้ง obj ['Gold', 'Non', 'Peakpoon', 'Fon']
log(friends[0]); // Gold (เปลี่ยนชื่อจาก Money เป็น Gold แล้ว)

friends[1] = "Michael"; // เปลี่ยนชื่อนนเป็นไมเคิล
log(friends); // ["Gold", "Michael", "Peakpoon", "Fon"];

// ถ้าพยายามอัพเดทใน index ที่ไม่มีอยู่จริง = เป็นการ add เพิ่ม
/// ไม่ควรทำ ////
// friends[-1] = "Mai";
// log(friends);
// log(friends[-1]);

/////// 2.3 Add ///////
// ไปเพิ่มใน index ถัดไปแทน จากเดิมมี 0-3 ก็ไปเพิ่มที่ 4 แทน
log(friends[3]);
friends[4] = "Git";
log(friends); // ['Gold', 'Michael', 'Peakpoon', 'Fon', 'Git']

/////// 2.4 Delete ///////
delete friends[2];
log(friends); //  ['Gold', 'Michael', empty, 'Fon', 'Git']
// ทุกคนจะยังอยู่ออเดอร์เดิม
log(friends[2]); // undefined

//////////////////////////////////////////////////////////////
//////////// 3. Basic Property and Method of Array ///////////
//////////////////////////////////////////////////////////////

////// <arr>.length ///////
// = คืนค่าความยาวมาให้

log(friends.length); // return 5

// friends[5] = "Mix"; // วิธีปกติ ที่เราต้องมานั่งนับ
// friends[6] = "Mix";
// log(friends); // ใส่เลขผิด Mix เลยเป็น empty
friends[friends.length] = "Mix"; // มันจะไปต่อท้ายให้เองโดยอัตโนมัติ ไม่ต้องมานั่งนับลำดับเอง // ความยาว array ปัจจุบัน = next index เสมอ
log(friends); // ['Gold', 'Michael', empty, 'Fon', 'Git', 'Mix']
log(friends.length); // 6

// for (let i = 0; i <= friends.length - 1; i++) {
//   // 0,1,2,3,4,5 (เพราะ length = 6)
//   console.log(i, friends[i]); // มันจะ log ชื่อเพื่อนไล่มาคนละบรรทัดว่าเลขไหนเป็นใคร
//   /*
//   0 "Gold"
//   1 "Michael"
//     ....
//     ....
//   */
// }

for (let i = 0; i < friends.length - 1; i++) {
  // 0,1,2,3,4
  console.log(i, friends[i]);
}

////// 3.1 Method: CRUD element ///////

const animals = ["Spider", "Cat", "Elephant"];

// Immutable: ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยน ต้องเขียนทับข้อมูลเดิม)
// Mutable: เปลี่ยนแปลงค่าได้

/////// 3.1.1 Push ///////////
// เพิ่มคิวต่อท้าย

// Method Push ทำให้ array mutate ไหม ? YESSSS (ทำให้ array ยาวขึ้น address เดิม)
// Method Push return อะไรกลับมา >> return ค่า length ของ array

let r = animals.push("Dog");
log(r); // return 4
// animals.push("Dog");
log(animals); // ['Spider', 'Cat', 'Elephant', 'Dog']

/////// 3.1.2 Unshift ///////////
// แทรกคิวไว้ข้างหน้า
// ถ้า array ยาวมากๆ = unshift จะทำงานช้ากว่า shift เพราะต้องรันคิวใหม่ทั้งหมด = performance จะช้ากว่า

let s = animals.unshift("Snake", "Bird");
log(animals); // ['Snake', 'Bird', 'Spider', 'Cat', 'Elephant', 'Dog']
log(s); // 6

/////// 3.1.3 Pop ///////////
// ตัวท้ายสุดเด้งออก
// return ตัวที่ถูกเด้ง ไม่ใช่ length

let t = animals.pop();
log(animals); // ["Snake", "Bird", "Spider", "Cat", "Elephant"] >> หมาหาย
log(t); // return Dog ที่หายไป ไม่ return ความยาว
// แต่ที่อันอื่น return ความยาว เพราะ dev เป็นคน push เอง รู้อยู่แล้วว่า push อะไรไป ไม่จำเป็นต้อง return สิ่งที่เรารู้อยู่แล้วมาให้

/////// 3.1.4 Shift ///////////

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

//////////////// ******** ////////// ******** ////////////////
/////// Aside Topic: Higher Order Function & Callback ////////
//////////////// ******** ////////// ******** ////////////////

function add(x, y) {
  return x + y;
}
console.log(add(5, 6)); // 11

// Function Expression: FN as a value
const a = console.log;
const b = alert;
// a("Hi"); // console.log ("Hi")
// b("Hello"); // alert("Hello")

// สร้าง Function ที่รับ parameter(input) เป็น function
function addAndShow(x, y, fn) {
  // รับ parameter เป็นตัวเลขสองเลข และฟังชั่น
  let result = x + y;
  // call fn()
  fn(`result is: ${result}`);
  return result;
}

// function show() {
//   console.log("Magic Word");
// }

// addAndShow(5, 10, show);
// show จะกลายเป็น fn()
// = log "Magic Word"
// สำคัญคืออย่าลืม call function ใน function addAndShow ไม่งั้นมันจะไม่รัน

function show(result) {
  console.log(result);
}

addAndShow(5, 10, console.log);
// fn == console.log
// fn(`result is: ${result}`) === console.log(`result is: ${result}`)
addAndShow(5, 10, alert);
// alert result is: 15

// addAndShow = เรียกว่า Higher Order Function
// console.log & alert = เรียกว่า Call back

// addAndShow(5, 10, show); // console.log result is: 15 ออกมาให้

////////////////

//// Example ////

// A: Main FN
// Function Cook: Higher Order Function (ฟังก์ชั่นที่รับฟังก์ชั่นเป็น parameter)
// Function fn1, fn2, fn3: เรียกว่า Callback (จะถูกรันก็ต่อเมื่อ main fn ถูกรันก่อนเท่านั้น) เหมือน fn123 ถูกเรียกทีหลัง

function cook(fn1, fn2, fn3) {
  fn1();
  fn2();
  fn3();
}

// B: Sub FN
function step1() {
  log("1. Prepare ingredient");
}
function step2() {
  log("2. cooking");
}
function step3() {
  log("3. serve");
}

// C: Call FN
cook(step1, step2, step3);
// คนเรียกใช้ func cook ต้องรู้ว่าจะส่ง fn ไหนไปก่อนหลัง

/*
1. Prepare ingredient
2. cooking
3. serve
*/

addAndShow(5, 10, step1);

// (ต่อ loop)

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

///// Example 2 /////

// สิ่งที่ forEach จะส่งมาให้เรา คือ
// ตัวแรก = item
// ตัวสอง = index
// ตัวสาม = array ทั้งก้อน

[1, 2, 3, 4, 5].forEach((a) => console.log(a));
// เปลี่ยน a เป็นอะไรก็ได้
// a ออกมาเป็นค่า item
/* 
1
2
3
4
5
*/

[1, 2, 3, 4, 5].forEach((a, b) => console.log(a, b));
// b ออกมาเป็นค่า index [0,1,2,3,4]
/* 
1 0
2 1
3 2
4 3
5 4
*/

[1, 2, 3, 4, 5].forEach((a, b, c) => console.log(c));
/*
[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5]
*/

///// Example 3 /////

sum = 0;
// [1,2,3,4].forEach((a) => sum+=a)
[1, 2, 3, 4].forEach((a) => (sum = sum + a));
// 1st: (1) => sum = 0 + 1; => sum = 1;
// 2nd: (2) => sum = 1 + 2; => sum = 3;
// 3rd: (3) => sum = 3 + 3; => sum = 6;
// 4th: (4) => sum = 6 + 4; => sum = 10;
