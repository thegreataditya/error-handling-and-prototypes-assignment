class Student{
    constructor(name){
        this.name = name;
    }
}

Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
}

let stu1 = new Student("Aditya");

stu1.printDetails();