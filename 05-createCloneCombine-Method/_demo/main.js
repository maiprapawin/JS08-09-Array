/////////////////////////////// ARRAY ///////////////////////////////

//////////////////////////////////////////////////////////
//////////// Create, Clone, Combine Array ////////////////
//////////////////////////////////////////////////////////

///// 1. Method: Concat //////
// SYNTAX: array.concat([array] หรือ single item)

// รับ parameter เป็น array หรือ item ก็ได้
// มันจะเอาสิ่งที่ต่อท้าย concat ไปต่อท้ายต้นฉลับให้

const arr = [1, 2];
const newArr = [1, 2].concat([3, 4], [5, 6], 7, 8);

console.log(newArr); // create new one [1,2,3,4,5,6,7,8] ไม่ยุ่งกับต้นฉบับเลย
console.log(arr); // not mutated [1,2]

//////////////////////////////////////////////////////////

///// 2. Method: Slice //////
// เฉือน array บางส่วนมา แต่ไม่ได้ทำลายของเก่า คือ array เก่าจะยังเหมือนเดิม ไม่กระทบ
// ใช้บ่อยกว่า concat
/* 
SYNTAX: 
- start index = inclusiv = เอาด้วย
- end index = exclusive = ไม่เอา
*/

// [0,1,2,3,4,5].slice(0,3); // จะได้ 0,1,2

const arr2 = [0, 1, 2, 3, 4, 5];
const newArr2 = arr2.slice(0, 3);
const newArr3 = arr2.slice(-3);

console.log(arr2); // [0, 1, 2, 3, 4, 5]
console.log(newArr2); // [0,1,2]
console.log(newArr3); // [3,4,5] // -3 = เอา 3 ตัวหลังมา ตัวหลังสุดใน array คือ -1
//////////////////////////////////////////////////////////
