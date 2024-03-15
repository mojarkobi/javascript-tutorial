const string3 = new String("hello");
const string4 = new String("hello");



console.log(string3 == string4); // false  
console.log(string3 === string4); // false


console.log(string3.valueOf == string4.valueOf); // true because only primitive value check

console.log(string3.valueOf === string4.valueOf); // true because only primitive value check


const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false



console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true
console.log(obj == null); // false
console.log(obj == undefined); // false


// আমরা জানি যে == কে loosly equal check বলে এবং এটি দিয়ে চেক করলে ভ্যালু মিললে ডাটা টাইপ না মিললেও true দেখায় 
// কারণ ভ্যালু মিলার পর ডাটা টাইপ না মিললে এটি data type implicitly convert করার চেষ্টা করে
// তাই == দিয়ে চেক করলে ডাটা টাইপ না মিললেও true দেখায়

