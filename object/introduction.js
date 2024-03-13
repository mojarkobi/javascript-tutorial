
// here i use object name also this keyword to refer it's object
const person = { fname: "ashik",lname:"ahmed", age: 27, occupation: "Software engineer" , fullname: function(){return person.fname +" "+ this.lname}};

console.log(person.fname + " age is " + person.age); // access property using dot operator
console.log(person["fname"] + " age is " + person["age"]); // accessing property using ['property_name']
console.log(person.fullname()) // access fullname method

person.hobby = "swimming";

console.log(person.hobby);

delete person.hobby; // here delete hobby property from person object


const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";
person2.fullname = function(){return this.firstName +" "+this.lastName};

console.log(person2.fullname());



/*

উপরের কোড গুলিতে let use না করে const ব্যবহার করেছি
কারণ আমরা অবজেক্ট এর প্রপার্টি বা মেথড পরিবর্তন করতে চাইলে করবো তারমানে এই না যে সরাসরি 
অবজেক্ট কে পরিবর্তন করে ফেলবো 

যেমন let person const person2 = new Object();
person2.firstName = "John";

person2 = 25;

এখানে যেখানে person2 শব্দটি ছিলো একটি অবজেক্ট সেখানে এটিকে reassign করে person2 = 25; করা হয়ে গেছে যেটি অপ্রত্যাশিত কোনো ফলাফল দিতে পারে

*/