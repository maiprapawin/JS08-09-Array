// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]

/////////////////////////////////////////////////

// squareArr
// (array) => original Array (modified) = BAD PRACTICE
// (array) => new Array

/////////////////////////////////////////////////

// อิง arr มา แต่ไม่แก้ array เก่า
// สร้าง array ใหม่เลย อันเก่าจะได้ไม่พัง ถ้าเราแก้
// ***** ไม่ควร modify array เก่า เพราะอาจจะเกิด infinite loop

const arr = [2, 3, 5, 7, 11];

function squareArr(arrayInput) {
  // Start Reuse Logic
  const newArr = [];
  // loop ด้านล่างนี้ จะใช้ for of, for each ก็ได้เหมือนกัน
  for (let i = 0; i < arrayInput.length; i++) {
    newArr.push(arr[i] ** 2);
  }
  // console.log(newArr); // [4, 9, 25, 49, 121]
  return newArr;
  // End Reuse Logic
}

let newArray = squareArr(arr);
console.log(newArray); // [4, 9, 25, 49, 121]
console.log(arr); // [2, 3, 5, 7, 11]

/////////////////////////////////////////////////

///// Mai's version: ///// (ไม่ออกมาเป็น array)
// const arr = [2, 3, 5, 7, 11];

// function squareArr() {
//   arr.forEach((item) => console.log(item ** 2));
// }

// squareArr();
