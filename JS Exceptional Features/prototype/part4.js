PersonFunc.prototype = {
    eat() {
      console.log("Person is eating");
    },
  
    sleep() {
      console.log("Person is sleeping");
    },
  };

  // PersonFunc.prototype কে চাইলে নিচের PersonFunc এর নিচে লিখলেও কাজ করতো

function PersonFunc(name, age) {
  let person = Object.create(PersonFunc.prototype); // Object.create দিয়ে  PersonFunc.prototype দ্বারা person অবজেক্ট তৈরী করলাম
  //অনেকটা oop class extends করার মতো।  prototype হলো PersonFunc ফাংশনটার প্রোপার্টি। আর আমরা জানি যেকোনো ফাংশনের prototype নামে 
  // একটি প্রোপার্টি থাকে যেটা কিনা একটি object কে হোল্ড করে বা পয়েন্ট করে থাকে

  person.name = name;
  person.age = age;
  return person; // we return the object to make accessible outside this function
}




let sakib = PersonFunc("sakib", 25);
let ashik = PersonFunc("ashik", 27);

sakib.eat(); 
ashik.sleep(); 


/*

নিচে দেখানো হলো কিভাবে উপরের কোডটি  let person = Object.create(PersonFunc.prototype); এই অংশ বাদ দিয়ে এবং return person; বাদ দিয়ে কোড করা যায়

*/

Person.prototype = {
    eat() {
      console.log("Person is eating");
    },
  
    sleep() {
      console.log("Person is sleeping");
    },
  };

// Person.prototype কে চাইলে নিচের Person এর নিচে লিখলেও কাজ করতো

function Person(name, age) {

  this.name = name;
  this.age = age;
}


let rakib = new Person("Md Rakib", 25);

rakib.eat(); 
rakib.sleep(); 