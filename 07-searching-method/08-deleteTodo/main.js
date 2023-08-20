// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id
// - execute deleteTask(1)

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
  const foundId = tasks.findIndex((taskObj) => taskObj.id === id);

  if (foundId !== -1) {
    tasks.splice(foundId, 1);
  }
}

deleteTask(1);

console.log(tasks);
