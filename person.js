// module wrapper function

// (function(exports, require, module, __filename, __dirname) {
    
//})

console.log(
            `This is the directory name; ${__dirname},
            \n and this the file name: ${__filename}`
            );

class Person {
    constructor(name, age) {
        this.name =name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

module.exports = Person;
