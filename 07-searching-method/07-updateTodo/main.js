// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

//////////////////////////////////////////////////////////////////

//////////////////// Ver. 1 ไม่ค่อยดี เพราะมันไปแก้ตัว global ////////////////////

// function updateTask(id, newTask) {
//   ///////// LOGIC //////////

//   // SearchById
//   const foundIndex = tasks.findIndex((obj, index) => obj.id == id);

//   // foundIndex = 1
//   if (foundIndex != -1) {
//     // ถ้าเจอ (-1 แปลว่าไม่เจอ not -1 = เจอ)
//     tasks[foundIndex].name = newTask;
//   }
// }
// updateTask(2, "Traveling");
// console.log(tasks);

//////////////////// Ver. 2 ////////////////////

function updateTask(id, newTask) {
  const foundIndex = tasks.findIndex((obj, index) => obj.id == id);
  if (foundIndex != -1) {
    const newTodo = Object.assign({}, tasks[foundIndex]);
    newTodo.name = newTask;
    tasks.splice(foundIndex, 1, newTodo);
  }
}

updateTask(2, "Traveling");
console.log(tasks);
