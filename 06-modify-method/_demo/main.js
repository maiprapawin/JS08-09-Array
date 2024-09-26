///////////////////////// Splice /////////////////////////

/////// ลบ //////

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["I", "JavaScript"]

//// ลบ และ เพิ่ม /////

let arr2 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");
console.log(arr2); // now ["Let's", "dance", "right", "now"]

///// เพิ่ม โดยไม่ลบ /////

let arr3 = ["I", "study", "JavaScript"];
// from index 2 // เริ่มที่ตำแหน่ง 2 = JavaScript
// delete 0
// then insert "complex" and "language" // เอาไปแทรกที่ index 2 และ Javascript ถูกเลื่อนออกไป
arr3.splice(2, 0, "complex", "language");
console.log(arr3); // "I", "study", "complex", "language", "JavaScript"

///// ตัดออกไป, return ของที่ถูกตัดทิ้ง /////

let arr4 = ["I", "study", "JavaScript", "right", "now"];
let r = arr4.splice(0, 2);
console.log(r); // (2) ['I', 'study']
