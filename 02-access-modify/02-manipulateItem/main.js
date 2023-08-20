// ให้ทำตามขั้นตอนดังนี้
// - สร้างตัวแปร Array ชื่อ styles และให้มี element คือ Jazz และ Blues ตามลำดับ
// - เพิ่ม Rock-n-Roll ต่อท้ายเข้าไปใน styles
// - แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
// - ลบ element ตัวแรก โดยใช้คำสั่ง delete
// - จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด
// i

let styles = ["Jazz", "Blues"];

styles[styles.length] = "Rock-n-Roll"; // styles.push("Rock-n-Roll");
console.log(styles); // ['Jazz', 'Blues', 'Rock-n-Roll']

styles[1] = "Classic";
console.log(styles); //  ['Jazz', 'Classic', 'Rock-n-Roll']

delete styles[0];
console.log(styles); // [empty, 'Classic', 'Rock-n-Roll']

console.log(styles.length); // 3
