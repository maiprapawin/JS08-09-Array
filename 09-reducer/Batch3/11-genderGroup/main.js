// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expected result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

// result = obj {}

const gender = persons.reduce((acc, personObj) => {
  if (!acc[personObj.sex]) {
    acc[personObj.sex] = [];
  }
  acc[personObj.sex].push(personObj.name);
  return acc;
}, {});

console.log(gender);
