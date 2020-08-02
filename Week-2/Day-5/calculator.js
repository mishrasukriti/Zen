/**
This is Calculator class. It has functions to ADD,Subtract , multiply and Divide two numbers.
*/
class Calculator{
	
	constructor(){
		
	}
	//Adds two values given in input
	add(a,b){
		return a+b;
    }
    //Subtracts two values given in input
	sub(a,b){
		return a-b;
	}
	//Multiplies two values given in input
	mul(a,b){
		return a*b;
	}
	//Divides two values given in input
	div (a,b){
		return a/b;
	}
}

//Creating object useCalc of the calculator class
let useCalc= new Calculator();
let num1=4, num2=2;

//Printing result of all the four arithmetic operation on num1 and num2
console.log(`Addition of ${num1} and ${num2} is: ${useCalc.add(num1,num2)}`);
console.log(`Subtraction of ${num1} and ${num2} is: ${useCalc.sub(num1,num2)}`);
console.log(`Multiplication of ${num1} and ${num2} is: ${useCalc.mul(num1,num2)}`);
console.log(`Division of ${num1} and ${num2} is: ${useCalc.div(num1,num2)}`);

