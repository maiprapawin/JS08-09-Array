// จงหา unique array element ของ alphabets

let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// expected result: ['a', 'b', 'c', 'e', 'd']

/////////////////////////////////////////////////////////////////////////

const result = alphabets.reduce((acc, char) => {
  //   acc.push(char);
  // ถ้า character ตัวนั้น อยู่ใน acc แล้ว => ไม่ต้อง push
  // แต่ถ้าไม่มี character นั้น => ให้ push
  // จะรู้ได้ยังไง ? => loop หา หรือ find index

  //// SEARCH ////
  let found = false; // ตั้ง default เป็น false ว่ายังหาไม่เจอไปก่อน
  for (let c of acc) {
    if (c == char) found = true;
  }

  //// ACTION ////
  if (!found) acc.push(char);

  //// RETURN ////
  return acc;
}, []);

console.log(result); // (5) ['a', 'b', 'c', 'e', 'd']

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

const set = new Set(alphabets); // แต่จะออกมาเป็น object
console.log(set); // Set(5) {'a', 'b', 'c', 'e', 'd'}
