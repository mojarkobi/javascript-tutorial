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

// rakib.eat();
// rakib.sleep();



/*
উপরের কোড কে এবার class এ convert করলাম
*/



class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }


  eat() {
    console.log("Person is eating");
  }

  sleep() {
    console.log("Person is sleeping");
  }

}

let amit = new PersonClass("Md amit", 25);

amit.eat();
amit.sleep();
