// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

////////////////////////////////////////////////////////////////////

let arr = [];
let sum = 0;

do {
  let num = prompt("Enter a number");

  if (num === null || num.trim() === "") {
    break;
  }

  let number = +num;
  if (isNaN(number)) {
    break;
  }
  arr.push(number);
  sum += number;
} while (true);

console.log(arr);
console.log(sum);
