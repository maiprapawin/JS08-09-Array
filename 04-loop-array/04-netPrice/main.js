// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 },
// ];

// const summary = [
// { netPrice: 900 }, { netPrice: 475 }, { netPrice: 100 }
// ];

////////////////////////////////////////////////////////////////////////

/////// Solution 1 ///////

// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 },
// ];

// // 1.
// // sales = array
// // sales = [obj1, obj2, obj3]

// const newArr = [];

// // 2.
// // WalkThrough Array (Loop)

// for (let productObj of sales) {
//   //   console.log(productObj); // productObj = แต่ละ item ของเราคือ object

//   // 3.
//   // each item = Object
//   ///// 2nd Layer /////
//   // access object => dot, bracket

//   let price = productObj.price;
//   let discount = productObj.discount;
//   //   let netPrice = price * (1 - discount); // บางอันอาจจะออกมาเป็น NaN เพราะไม่มี discount
//   let netPrice = price;
//   if (discount) {
//     netPrice = price * (1 - discount);
//   }
//   //   console.log(price, discount, netPrice);
//   const newObj = { netPrice: netPrice };
//   newArr.push(newObj);
//   //   console.log(newObj);
// }
// console.log(newArr);
// console.log(sales); // จะยังเท่าเดิมเพราะเราไม่ได้ modify มัน เลยไม่กระทบ

////////////////////////////////////////////////////////////////////////

/////// Solution 2 ///////

// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 },
// ];

// const newArr = [];

// // obj = {price: 1000, discount: 0.1}
// sales.forEach((obj, index) => {
//   // calc NetPrice
//   let netPrice = obj.price * (1 - (obj.discount || 0));
//   newArr.push({ netPrice });
// });

// console.log(sales); // ได้ค่าเดิม ไม่ได้แก้ modify มัน
// console.log(newArr);
// /*
// 0: {netPrice: 900}
// 1: {netPrice: 475}
// 2: {netPrice: 100}
// */

/////// Solution 3 ///////

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

const newArr = [];

// sales = []
// sales = [ {}, {}, {}]
// sales = [{price:____, discount:____},{}, {}]
sales.forEach((obj) =>
  newArr.push({ newPrice: obj.price * (1 - obj.discount || 0) })
);
console.log(sales); // ได้ค่าเดิม ไม่ได้แก้ modify มัน
/*
0: {price: 1000, discount: 0.1}
1: {price: 500, discount: 0.05}
2: {price: 100}
*/
console.log(newArr);
/*
0: {netPrice: 900}
1: {netPrice: 475}
2: {netPrice: 100}
*/
