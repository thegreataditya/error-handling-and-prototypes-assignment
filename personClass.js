class Person {
  constructor(name = "unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

let aditya = new Person("Aditya", 17);
console.log(aditya.getDetails());

let newPerson = new Person();
console.log(newPerson.getDetails());