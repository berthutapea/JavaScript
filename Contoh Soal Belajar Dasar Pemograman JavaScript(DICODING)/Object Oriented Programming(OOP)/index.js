// CONTOH OOP
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayHello = function(friend) {
//     console.log(`Hello, ${friend.name}`);
// };

// function Teacher(name) {
//     Person.call(this, name);
// }
// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// const teacherA = new Teacher('Budi');
// const teacherB = new Teacher('Ani');
// teacherA.sayHello(teacherB);

/**
 * 1. Constructor
 */
// class MyClass {
//     constructor() {
//         console.log('Ini adalah constructor class');
//     }
// }

// new MyClass ()

/**
 * 2. Static init block
 */

// class MyClass {
//     static {
//         console.log('Ini adalah constructor class');
//     }
// }


/**
 * 3. Methods
 */

// class MyClass {
//     firstField = 'first field';


//     firstMethod() {
//         console.log(`Ini adalah method pertama dari class ${MyClass.name}`);
//     }

//     // Getter
//     get getFirstField() {
//         return this.firstField;
//     }

//     // Setter
//     set setMyFirstField(value) {
//         this.firstField = value;
//     }
// }

// const myClass = new MyClass()
// myClass.firstMethod();

// // Getter & Setter 
// console.log(myClass.getFirstField);
// myClass.setMyFirstField = 'nilai berubah';
// console.log(myClass.getFirstField);