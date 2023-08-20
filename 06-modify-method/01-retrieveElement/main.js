// ให้สร้างตัวแปร Array โดยเอาค่ามาจาก sports ในตำแหน่ง index 1 ถึง 3

const sports = ["football", "volleyball", "tennis", "basketball", "judo"];

const removedSports = sports.splice(1, 3);
console.log(removedSports); //  ['volleyball', 'tennis', 'basketball']

console.log(sports); // ["football","judo"]
