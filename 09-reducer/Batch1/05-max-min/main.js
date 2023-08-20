// จงหาค่ามากสุดและน้อยสุดใน arr

let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const maxNumber = Math.max(...arr);
// Math.max(...arr) === Math.max(3.24, 2.78, 3.86, 1.37, 0.52)
console.log(maxNumber);

const minNumber = Math.min(...arr);
console.log(minNumber);
