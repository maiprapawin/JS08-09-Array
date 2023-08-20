// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array

let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

// const ageSum = arr.reduce((acc, personObj) => acc + personObj.age, 0);
// console.log(ageSum);

// function getAverageAge() {
//   return +(ageSum / arr.length).toFixed(2);
// }

function getAverageAge(array) {
  // Algorithm = SUM age/ no. of person
  // const sumAge = array.reduce((acc, personObj) => {
  //   let age = personObj.age;
  //   return acc + age;
  // }, 0);
  const sumAge = array.reduce((a, c) => a + c.age, 0);
  return sumAge / array.length;
}
const result = getAverageAge(arr);
console.log(result);
