let demo = "hello" / 5; // result NaN কিন্তু এর ডাটা টাইপ হবে number 
//কারণ NaN ঐখানে আসে যেখানে number ডাটা টাইপ আশা করা হয়েছিল
// কিন্তু তা আসতে পারেনি তাই NaN আসল

console.log(demo === demo); // এখানে demo === demo মানে হলো NaN === NaN কিন্তু false আসলো 
//তার কারন নিচে আরেকটি উদাহরণ দিয়ে বুঝনো হলো


let num1 = "ashik" / 5;
let num2 = "ruhulamin" / 5;

console.log(num1); // result Nan
console.log(num2); // result Nan

console.log(num1 == num2); // double equal দিয়েও false আসলো
/*
কারন উপরের কোডে "ashik" / 5 করাতে আসলো NaN  আবার "ruhulamin" / 5 করাতে NaN কিন্তু তার 
মানে এই নয় যে একই ক্যালকুলেশনের জন্য NaN  আসলো তাই দুটি NaN  সমান দেখায় না
*/


// Objectj.is  and same value zero algorith

let myArr = [NaN,"ashik"];

console.log(myArr.includes(NaN)); // এখানে includes(NaN) দিয়ে চেক করেছে myArr ভেতরে NaN আছে কিনা
// কিন্তু এটি true আসবে কিন্তু এটা কি করে সম্ভব আমরা জানি NaN দিয়ে NaN যাচাই করলে এটা ম্যাচ দেখায় না 
// তাহলে এটির বেলায় true আসলো কেমনে কারণ includes(NaN) দিয়ে চেক করার সময় এটি loose equality বা ==  এবং  strict equality বা === দিয়ে চেক করেনা

//জাভাস্ক্রিপ্টে Objectj.is  and same value zero algorith বলে একটি বিষয় আছে নিচে  এগুলি আলোচনা করলে বুঝা যাবে কেনো এরকম হলো



function sameValueZero(x, y) {
    if (typeof x === "number" && typeof y === "number") {
      // x and y are equal (may be -0 and 0) or they are both NaN
      return x === y || (x !== x && y !== y);
    }
    return x === y;
  }
  
/* 

উপরের কোডে return x === y || (x !== x && y !== y)  দ্বারা বুঝানো হলো যে x === y  হলে অথবা x !== x এবং y !== y সমান না হলেও এটি true return করবে

আমরা জানি nan == nan  করলে false আসে আর উপরের  (x !== x && y !== y) দ্বারা এটাই বুঝানো হয়েছে যে যখন x এর সাথে x  এবং y এর সাথে y না মিলে তারপরেও
এটি true আসবে

সেজন্য myArr.includes(NaN) এই same value zero algorith এর মতো করে কাজ করে বলেই এটি true আসে

*/