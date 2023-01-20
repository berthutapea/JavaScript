// CONTOH OOP
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function(friend) {
    console.log(`Hello, ${friend.name}`);
};

function Teacher(name) {
    Person.call(this, name);
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

const teacherA = new Teacher('Budi');
const teacherB = new Teacher('Ani');
teacherA.sayHello(teacherB);

/**
 * 1. Constructor
 */
class MyClass {
    constructor() {
        console.log('Ini adalah constructor class');
    }
}

new MyClass ()

/**
 * 2. Static init block
 */

class MyClass {
    static {
        console.log('Ini adalah constructor class');
    }
}


/**
 * 3. Methods
 */

class MyClass {
    firstField = 'first field';


    firstMethod() {
        console.log(`Ini adalah method pertama dari class ${MyClass.name}`);
    }

    // Getter
    get getFirstField() {
        return this.firstField;
    }

    // Setter
    set setMyFirstField(value) {
        this.firstField = value;
    }
}

const myClass = new MyClass()
myClass.firstMethod();

// Getter & Setter 
console.log(myClass.getFirstField);
myClass.setMyFirstField = 'nilai berubah';
console.log(myClass.getFirstField);

/**
 * 4. Static Methods & Properties
 */

class MyClass {
    static firstStaticField = 'first static field';
    static secondStaticField;
    static {
        MyClass.secondStaticField = 'second static field';
    }
    static firstStaticMethod() {
        return 'Ini adalah static method pertama dari class MyClass';
    }
}

console.log(MyClass.firstStaticField);
console.log(MyClass.secondStaticField);
console.log(MyClass.firstStaticMethod());

/**
 * 5. This Keyword
 */
class MyClass {
    firstField = 'first field';

    get getFirstField() {
        return this.firstField;
    }

    set setFirstField(value) {
        this.firstField = value;
    }
}

const myClass = new MyClass();
console.log(myClass.getFirstField);
myClass.setFirstField = '123';

/**
 * 6. Properties
 */

class MyClass {
    constructor(param1 = 'Dicoding', param2 = 'Indonesia') {
        this.param1 = param1;
        this.param2 = param2;
    }
}

// const myClass = new MyClass();
console.log(myClass.param1);
console.log(myClass.param2);

/**
 * 7. Fields
 */
class MyClass {
    firstField = 'first field';
    secondField = 'second field';

    #privateFirstField = 'private first field';
    #privateSecondField = 'private second field';

    get getPrivateFirstField() {
        return this.#privateFirstField;
    }
}

const myClass = new MyClass();
console.log(myClass.firstField);
console.log(myClass.secondField);
console.log(myClass.getPrivateFirstField);

/**
 * 8. Extends
 */

// Car
class Car {
    #engine = false;

    wheels = 4;
    color = null;
    speed = 100;
    nitro = null;

    startEngine() {
        console.log('Engine: Mesin menyala');
        this.#engine = true;
    }

    driveOff() {
        if (!this.#engine) {
            console.log('Go: Mesin Belum menyala');
            return false;
        }
        console.log('Go: Jalan....');
    }

    get speed() {
        return this.speed;
    }
}

// Bugatti
class Bugatti extends Car {
    color = 'red';
    nitro = 100;

    get speed() {
        return this.speed + this.nitro;
    }
}

// const khrisnaBugatti = new Bugatti();
const indraBugatti = new Bugatti();

console.log(khrisnaBugatti.color);
console.log(khrisnaBugatti.nitro);
console.log(khrisnaBugatti.speed);


/**
 * 9.Super Keyword
 */

class Car {
    #engine = false;

    speed = 100;
    nitro = null;

    constructor(wheels, color) {
        this.wheels = wheels;
        this.color = color;
    }

    startEngine() {
        console.log('Engine: Mesin menyala');
        this.#engine = true;
    }

    driveOff() {
        if (!this.#engine) {
            console.log('Go: Mesin Belum menyala');
            return false;
        }
        console.log('Go: Jalan....');
    }

    get speed() {
        return this.speed;
    }
}

// Bugatti
class Bugatti extends Car {
    nitro = 100;

    constructor(wheels, color) {
     super(wheels, color);
    }

    driveOff() {
        if (super.driveOff()) return;

        console.log('Go: Nitro menyala...');
    }

    get speed() {
        return this.speed + this.nitro;
    }
}

const khrisnaBugatti = new Bugatti();

khrisnaBugatti.startEngine();
khrisnaBugatti.driveOff();
