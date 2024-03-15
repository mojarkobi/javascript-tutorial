function person(name,age){

    let person = {}
        person.name = name;
        person.age = age;

        person.eat = function(){

            console.log("person is eating");

        }

        person.sleep = function(){
            console.log("person is sleeping");

        }

        return person; // we return the object to accessible outside this function

}

let sakib = person("sakib",25);
let ashik = person("ashik",27);

sakib.eat();
ashik.sleep();

