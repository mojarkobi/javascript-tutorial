# Object

In JavaScript, almost "everything" is an object.

- Booleans can be objects (if defined with the `new` keyword)
- Numbers can be objects (if defined with the `new` keyword)
- Strings can be objects (if defined with the `new` keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects

All JavaScript values, except primitives, are objects.

* * * *

JavaScript Primitives
---------------------

A **primitive value** is a value that has no properties or methods.

**3.14** is a primitive value

A **primitive data type** is data that has a primitive value.

JavaScript defines 7 types of primitive data types:

Examples
--------

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

Immutable
---------

Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

| Value | Type | Comment |
| --- |  --- |  --- |
| "Hello" | string | "Hello" is always "Hello" |
| 3.14 | number | 3.14 is always 3.14 |
| true | boolean | true is always true |
| false | boolean | false is always false |
| null | null (object) | null is always null |
| undefined | undefined | undefined is always undefined |

## javascript method and property access example

```javascript



// here i use object name also this keyword to refer it's object
const person = { fname: "ashik",lname:"ahmed", age: 27, occupation: "Software engineer" , fullname: function(){return person.fname +" "+ this.lname}};

console.log(person.fname + " age is " + person.age); // access property using dot operator
console.log(person["fname"] + " age is " + person["age"]); // accessing property using ['property_name']
console.log(person.fullname()) // access fullname method

person.hobby = "swimming";

console.log(person.hobby);





```

## Using the JavaScript Keyword new

**The following example create a new JavaScript object using new Object(), and then adds 4 properties:**

Example

```javascript

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
```
