const personMethods ={
    
  eat() { // method
    console.log("person is eating");
  },

  sleep() { // method
    console.log("person is sleeping");
  }
}

// উপরে personMethods অবজেক্টে  eat() এবং sleep() নামক দুটি মেথড রাখলাম

function person(name, age) {

  let person = Object.create(personMethods); // Object.create দিয়ে  personMethods object দ্বারা person অবজেক্ট তৈরী করলাম অনেকটা oop class extends করার মতো
  person.name = name;
  person.age = age;
  return person; // we return the object to accessible outside this function
}

let sakib = person("sakib", 25);
let ashik = person("ashik", 27);

sakib.eat(); // eat() method টি আসলে প্যারেন্ট অবজেক্ট personMethods থেকে person অবজেক্ট এ ইনহেরিট করা হয়েছে
ashik.sleep(); // sleep() method টি আসলে প্যারেন্ট অবজেক্ট personMethods থেকে person অবজেক্ট এ ইনহেরিট করা হয়েছে
