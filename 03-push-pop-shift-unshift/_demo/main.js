////// 3.1 Method: CRUD element ///////

const animals = ["Spider", "Cat", "Elephant"];

// Immutable: ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยน ต้องเขียนทับข้อมูลเดิม)
// Mutable: เปลี่ยนแปลงค่าได้

/////// 3.1.1 Push ///////////
// เพิ่มคิวต่อท้าย

// Method Push ทำให้ array mutate ไหม ? YESSSS (ทำให้ array ยาวขึ้น address เดิม)
// Method Push return อะไรกลับมา >> return ค่า length ของ array

let r = animals.push("Dog");
log(r); // return 4
// animals.push("Dog");
log(animals); // ['Spider', 'Cat', 'Elephant', 'Dog']

/////// 3.1.2 Unshift ///////////
// แทรกคิวไว้ข้างหน้า
// ถ้า array ยาวมากๆ = unshift จะทำงานช้ากว่า shift เพราะต้องรันคิวใหม่ทั้งหมด = performance จะช้ากว่า

let s = animals.unshift("Snake", "Bird");
log(animals); // ['Snake', 'Bird', 'Spider', 'Cat', 'Elephant', 'Dog']
log(s); // 6

/////// 3.1.3 Pop ///////////
// ตัวท้ายสุดเด้งออก
// return ตัวที่ถูกเด้ง ไม่ใช่ length

let t = animals.pop();
log(animals); // ["Snake", "Bird", "Spider", "Cat", "Elephant"] >> หมาหาย
log(t); // return Dog ที่หายไป ไม่ return ความยาว
// แต่ที่อันอื่น return ความยาว เพราะ dev เป็นคน push เอง รู้อยู่แล้วว่า push อะไรไป ไม่จำเป็นต้อง return สิ่งที่เรารู้อยู่แล้วมาให้

/////// 3.1.4 Shift ///////////
