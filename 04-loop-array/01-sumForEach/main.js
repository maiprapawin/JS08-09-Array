// จงหาผลรวมของ element ใน array โดยใช้ forEach

const array = [29, 17, 13, 47, 23, 31];

sum = 0;
array.forEach((a) => (sum = sum + a));
// sum = 160

///// 1. ถ้าใช้ for loop /////

// let sum = 0; // ตั้งเป็น Global
// for(let i = 0; i < array.length ; i++) {
//     console.log(i, array[i]);
//     sum += array[i]; // += 29, 17, 13, 47, 23, 31 = 160
// }

///// 2. for in /////

// let sum = 0;
// for (let index in array) {
//   sum += array[index];
// }
// console.log(sum);

///// 3. for of /////

// let sum = 0;
// for(let element of array) {
//     sum += element;
// }

// หรือ

// let sum = 0;
// for(let item of array) {
//     sum += item;
// }

///// 4. for each ตามข้างบน /////
