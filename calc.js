class Calculator{
    static add(x, y){
        return x+y;
    }
}

let calc = new Calculator();

Calculator.add(9,100);//right way to call the function
//calc.add(9,10); //this is wrong