class Employee{

    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}

let mahesh = new Employee("Mahesh", "Software Engineer", 150000);

console.log(mahesh.getSalary());