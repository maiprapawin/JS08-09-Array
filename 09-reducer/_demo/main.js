const nums = [4, 5, 6, 7];
// อยากได้ [8, 10, 12, 14]

const sum = nums.reduce((a, c) => a + c, 0); // ถ้าไม่ใส่ 0 >> default para2 = 4
const mul = nums.reduce((a, c) => a * c, 1); // ถ้าไม่ใส่ 1 >> default para2 = 4
// ถ้าไม่มี parameter ตัวที่สอง มันจะเอา element แรกเป็น initial accumulator
// เช่น ถ้าไม่มี 0 ตอนหาค่า sum >> มันจะใช้เลข 4 เป็น default เริ่มต้น

// ถ้าใช้วิธี .map //
// nums.map(x=> x*2) // create newArray

const mapArr = nums.reduce((acc, item) => {
  acc.push(item * 2);
  return acc;
}, []);

// before iteration : acc = []
// 1st iteration: ([], 4) => {[].push(4*2); return [8]}
// 2nd iteration: ([8], 5) => {[8].push(5*2); return [8, 10]}
// 3rd iteration...
// 4th iteration....

console.log(mapArr); // [8, 10, 12, 14]

/////////////

let str = " 1 2 3";
const arrNums = str.split(" "); // เปลี่ยน array of numbers => array of string
