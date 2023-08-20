//////////////////////////// 1. /////////////////////////////

// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]

////////////////////////////

// const array = [1, 2, 30, 400];
// const newArr = array.map((x) => {
//   2 * x;
// });
// console.log(newArr);

//////////////////////////// 2. /////////////////////////////

// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]

////////////////////////////

// const newArr = array.map((item) => item.toString());
// console.log(newArr);

//////////////////////////// 3. /////////////////////////////

// const array = [1, "1", 2, {}];
// // result: ["number", "string", "number", "object"]

////////////////////////////

// const newArr = array.map((item) => typeof item);
// console.log(newArr);

//////////////////////////// 4. ////////////////////////////

// const array = ["apple", "banana", "orange"];
// // result: ["APPLE", "BANANA", "ORANGE"]

////////////////////////////

// const newArr = array.map((item) => item.toUpperCase());
// console.log(newArr);

//////////////////////////// 5. ////////////////////////////

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

////////////////////////////

// const newArr = array.map((item) => {
//   if (item % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// });
// console.log(newArr);

//////////////////////////// 6. ////////////////////////////

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]

////////////////////////////

// const newArr = array.map((item) => {
//   if (item < 0) {
//     return item * -1;
//   } else {
//     return item;
//   }
// });
// console.log(newArr);

////////////////// หรือ //////////////////

// const array = [1, -3, 2, 8, -4, 5];
// const newArr = array.map((item) => Math.abs(item));
// console.log(newArr);

//////////////////////////// 7. ////////////////////////////

// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]

////////////////////////////

// const newArr = array.map((item) => item.toFixed(2));
// console.log(newArr);

//////////////////////////// 8. ////////////////////////////

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

////////////////////////////

// const months = {
//   0: "Jan",
//   1: "Feb",
//   2: "Mar",
//   3: "Apr",
//   4: "May",
//   5: "Jun",
//   6: "Jul",
//   7: "Aug",
//   8: "Sep",
//   9: "Oct",
//   10: "Nov",
//   11: "Dec",
// };
// const newArr = array.map((item) => {
//   return months[item];
// });
// console.log(newArr);

////////////////// หรือ //////////////////

// const array = [0, 5, 10, 7, 6, 5, 0];
// const MONTHS = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// const newArray = array.map((monthIndex) => MONTHS[monthIndex]);
// console.log(newArray);

//////////////////////////// 9. ////////////////////////////

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]

////////////////////////////

// // 1 => 1
// // 16 => 2 (2**4 == 16)
// // 81 => 3 (3**4 == 81)

////////////////////////////

// const newArray = array.map((n) => Math.sqrt(Math.sqrt(n)));
// console.log(newArray);

//////////////////////////// 10. ////////////////////////////

// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// // result: ["apple", "banana", "watermelon"]

// const newArray = array.map(function (fruitObj) {
//   return fruitObj.name;
// });
// console.log(newArray);

//////////////////////////// 11. ////////////////////////////
// const array = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ];
// // result: [14, 18, 32]

// const newArr = array.map((fruitObj) => fruitObj.age);
// console.log(newArr);

//////////////////////////// 12. ////////////////////////////
// const array = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]

// const newArr = array.map((fruitObj) => `${fruitObj.name} ${fruitObj.surname}`);
// console.log(newArr);

//////////////////////////// 13. ////////////////////////////

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]

////////////////////////////

// const newArray = array.map(function (fruitObj) {
//   // create NewFruit Object
//   const newFruitObj = Object.assign({}, fruitObj); // clone object
//   const birthYear = fruitObj.birth.slice(0, 4); // เอาแต่ปี
//   newFruitObj.age = 2021 - birthYear; // เพิ่ม age เข้าไป
//   return newFruitObj; // เป็นการเพิ่ม newFruitObj เข้าไปใน array เรา & ถ้าไม่ return จะออกมาเป็น return undefined
// });
// console.log(newArray);

//////////////////////////// 14. ////////////////////////////

// const array = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-10" },
//   { name: "watermelon", birth: "1985-12-30" },
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]

// ////////////////////////////

// // INPUT (JS-OBJ) => { name: "apple", birth: "2000-01-01" }
// // OUTPUT (STRING HTML TAG) => <tr><td>apple</td><td>01 jan 2000</td></tr>

// ////////////////////////////

// const MONTHS = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// const newArray = array.map(function (obj) {
//   let name = obj.name;
//   // retrieve value from each obj
//   const day = obj.birth.slice(-2);
//   const monthIndex = obj.birth.slice(-5, -3) - 1;
//   const year = obj.birth.slice(0, 4);
//   // create string
//   const resultString = `<tr><td>${name}</td><td>${day} ${MONTHS[
//     monthIndex
//   ].toLowerCase()} ${year}</td></tr>`;
//   return resultString;
// });
// console.log(newArray);
