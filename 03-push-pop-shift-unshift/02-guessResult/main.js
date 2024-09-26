// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // *
// ["a", "b", function() {alert(this)}]
// access array 2() >> ค่า function()
// ตอน call function >> js solve ค่า this
// ซึ่ง js ตามหาว่าเจอว่า arr เป็นคน call
// alert = arr

// * ตอบ alert ["a", "b", function() {alert(this)}]
