// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

let str = "I live in Thailand";
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

////////////////////////

/*
- ทำตัวเล็กทั้งหมดก่อน >> toLowerCase()
- สร้าง function >> ถ้ามี +1 ไปเรื่อยๆ ถ้ายังไม่มี ให้เป็น 0
- split แบบไม่มีเว้นวรรค === แยกเป็นตัวๆออกมา รวมช่องว่าด้วย " "
- ใช้ reduce สร้าง obj ขึ้นมา >> init acc = {}
*/

str = str.toLowerCase();
// console.log(str); // "i live in thailand"
str = str.split("");
// split แบบไม่มีเว้นวรรค === แยกเป็นตัวๆออกมา รวมช่องว่าด้วย " "
// ถ้าแบบเว้นวรรค (" ") มันจะเป็น split คำออกมา (4) ['i', 'live', 'in', 'thailand']

// console.log(str);
// (18) ['i', ' ', 'l', 'i', 'v', 'e', ' ', 'i', 'n', ' ', 't', 'h', 'a', 'i', 'l', 'a', 'n', 'd']

const initObj = {};

function countWordsFn(acc, item) {
  if (item !== " ") {
    if (!acc[item]) acc[item] = 0;
    acc[item]++;
  }
  return acc;
}

const newStr = str.reduce(countWordsFn, initObj);
// ใช้ reduce สร้าง obj ขึ้นมา >> init acc = {}
console.log(newStr);

//////////////// ไม่เอาแล้ว //////////////////

// const lettersArr = [];
// for (let word of str) {
//   const letters = word.split("");
//   lettersArr.push(...letters);
// }
// console.log(lettersArr);
////////////////////////////////////////////
