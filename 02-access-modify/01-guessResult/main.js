// ผลลัพธ์ในบรรทัด * มีค่าเป็นอะไรและเพราะอะไร

//   ```js
const arr = [1, 2, 4];
const newArr = arr; // [1,2,4]

arr[0] = 3; // [3, 2, 4] // == arr โดนแก้ด้วย
console.log(newArr[0]); // * >>> 3
// ```;

// ตอบ 3 >>> เพราะเป็นการ copied by Reference เอา address ตัวเดียวกันมาด้วย

///////////////////

// const = CONSTANT (mutable ?)
// constant = can't reassign
// constant = same ADDRESS

// const uncleHome = ["Bicycle", "Jar", "Dog"];
// สมมติบ้านลุงคือบ้านเลขที่ 5
// ของในบ้านสามารถเพิ่มได้ เพราะยังเป็น address เดิม บ้านเลขที่หลังเดิมอยู่
// ไม่ได้ reassign new address

// uncleHome = ["Dish"] // ทำไม่ได้ เพราะเป็นการ reassign
// แต่ถ้าเพิ่มลดของในบ้าน = ทำได้
