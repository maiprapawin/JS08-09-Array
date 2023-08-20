// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]

const flatArr = flattened.reduce((acc, subArr) => {
  // Walkthrough subArray
  // each Element of subArray => push into acc
  for (let num of subArr) {
    // console.log(num);
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    acc.push(num);
  }
  return acc;
}, []);

console.log(flatArr);
