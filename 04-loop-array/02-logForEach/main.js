// ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง
// const names = ["Mike", "Sid", "Jack", "Bill"];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill

//////////////////////////////////////////

///// วิธี 1 /////

/* 
const names = ["Mike", "Sid", "Jack", "Bill"];
names.forEach((person, order) => console.log(order + 1, person));
*/

// Callback: Literal ยัดไปตรงตัวเลย
// Callback: On the fly ใช้แล้วทิ้ง

////// names.forEach((item, index) => console.log(index, item));

//////////////////////////////////////////

///// วิธี 2 /////
const names = ["Mike", "Sid", "Jack", "Bill"];
function logPerson(person, order) {
  console.log(order + 1, person);
}
names.forEach(logPerson); // Callback: Named, Reference
