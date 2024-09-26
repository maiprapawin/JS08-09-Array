// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

// Mai's solution //
// const arr = [1, 2, 3];
// function clone() {
//   const arr2 = arr.concat();
//   return arr2;
// }

// console.log(clone()); // [1, 2, 3]
// console.log(arr); // [1, 2, 3] อันเดิม

function clone(arr) {
  // const newArr = arr.slice()
  // return newArr
  return arr.slice();
}
const a = clone([1, 2, 3, 4]);
console.log(a); // [1, 2, 3, 4]
a.push(5);
console.log(a); // [1, 2, 3, 4, 5]
