function Person(name, age) {
      this.name = name;
      this.age = age;
  }

  Person.prototype  = {

     eat() {
        console.log("Person is eating");
      },
    
      sleep() {
        console.log("Person is sleeping");
      }

  }
  
  let sagor = new Person("Md sagor", 25);
  
  sagor.eat();
  sagor.sleep();

  console.log(Person.prototype);