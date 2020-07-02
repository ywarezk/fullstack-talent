"use strict"

class Person1 {
    sayHello() {
        console.log(this);
    }

    sayHello2 = () => {
        console.log(this);
    }
}

class Student extends Person1 {
    sayHello2 = () => {
        super.sayHello2();
    }
}

const student = new Student();

student.sayHello2();
const me = new Person1();
me.__proto__.sayHello2 === undefined

// var myDog = 'hello';
// myDog.piglet = 'sweetness';
// String.prototype.piglet = 'hello';
// myDog.piglet


