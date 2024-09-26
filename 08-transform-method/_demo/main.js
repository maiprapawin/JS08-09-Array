//////////////////////////////////////////
/////////// Method: MAP Function /////////
//////////////////////////////////////////

// SYNTAX: <array>.map(......callback.....)
/// *** ต้องใส่ return ***

/// Example 1 ///
[2, 5, 10].map((item) => item * 2);
// MAP
// create newArr = []
// 1st Loop(item = 2): newArr.push(2*2)
// 2nd Loop(item = 5): newArr.push(5*2)
// 3rd Loop(item = 10): newArr.push(10*2)
// return newArr

/// Example 2 ///
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths); // 5,7,6
