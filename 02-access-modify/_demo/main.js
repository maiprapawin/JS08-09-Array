const log = console.log;

log("Learn array");

//////////////////////////////////////////////////////////////
/////////////// 2. Access, Modify, Add, Delete ///////////////
//////////////////////////////////////////////////////////////

//// Bracket Notation with Index

/////// 2.1 Access ///////
log(friends[0]); // Money
log(friends[2]); // Peakpoon
log(friends[-1]); // ถ้าเราใส่ index ที่ไม่มีอยู่จริง หาไม่พบ จะเป็น undefined
log(friends[10]); // undefined

/////// 2.2 Modify/ Update ///////
friends[0] = "Gold";
log(friends); // มาทั้ง obj ['Gold', 'Non', 'Peakpoon', 'Fon']
log(friends[0]); // Gold (เปลี่ยนชื่อจาก Money เป็น Gold แล้ว)

friends[1] = "Michael"; // เปลี่ยนชื่อนนเป็นไมเคิล
log(friends); // ["Gold", "Michael", "Peakpoon", "Fon"];

// ถ้าพยายามอัพเดทใน index ที่ไม่มีอยู่จริง = เป็นการ add เพิ่ม
/// ไม่ควรทำ ////
// friends[-1] = "Mai";
// log(friends);
// log(friends[-1]);

/////// 2.3 Add ///////
// ไปเพิ่มใน index ถัดไปแทน จากเดิมมี 0-3 ก็ไปเพิ่มที่ 4 แทน
log(friends[3]);
friends[4] = "Git";
log(friends); // ['Gold', 'Michael', 'Peakpoon', 'Fon', 'Git']

/////// 2.4 Delete ///////
delete friends[2];
log(friends); //  ['Gold', 'Michael', empty, 'Fon', 'Git']
// ทุกคนจะยังอยู่ออเดอร์เดิม
log(friends[2]); // undefined
