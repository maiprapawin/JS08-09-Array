// จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name

const products = [
  { id: 1, name: "Crystal" },
  { id: 4, name: "Namthip" },
  { id: 5, name: "Nestle" },
];
// Expected Result // { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

/////////////////////////////////////////////////////////////////////////

const newProd = products.reduce((acc, productObj) => {
  return Object.assign(acc, { [productObj.id]: { name: productObj.name } });
}, {});

console.log(newProd);
