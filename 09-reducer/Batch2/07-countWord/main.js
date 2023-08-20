// จงนับชื่อที่ปรากฏใน names

let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

////////////////////////////////////////////////////////////

// ARRAY => OBJ

const initObj = {};

// function reducerFn(acc, name, index, arr) {
// parameter >> index กับ arr ไม่ได้ใช้ >> ลบออกได้

function reducerFn(acc, name) {
  // acc === {"Jack"}
  // Scenarios:
  // #1 - ยังไม่เคยมีชื่อใน object => ให้เพิ่มชื่อเป็น key และ value เป็น 1
  // #2 - มีชื่อใน object ที่สะสมอยู่แล้ว => ให้ update value เพิ่มขึ้น 1

  // เช็คว่าใน acc มี obj ชื่อ Jack หรือยัง
  // acc ["Jack"] === acc[name]

  ///// Version 1 /////
  //   if (!acc[name]) {
  //     // ถ้ายังไม่มี
  //     acc[name] = 1; // ให้เสร็จ value = 1
  //   } else {
  //     acc[name]++; // แต่ถ้ามีอยู่แล้ว ก็ให้อัพเดทเพิ่มไป 1
  //   }
  //   return acc;
  // }

  ///// Version 2 /////
  if (!acc[name]) acc[name] = 0;
  acc[name]++;
  return acc;
}

const r = names.reduce(reducerFn, initObj);
console.log(r);
