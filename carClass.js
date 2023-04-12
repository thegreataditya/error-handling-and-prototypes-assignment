class Car{
    
    constructor(c, m, y){
      this.company = c;
      this.model = m;
      this.year = y;  
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

let myCar = new Car("BMW", "Series X", 2019);

console.log(myCar.getDescription());