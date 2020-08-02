/**
This class is meant to have attributes and functionalities related to Circle shape.
*/
class Circle{
	constructor(radius, color){
		this.radius= radius;
		this.color= color;
	}
	//Returns radius of circle
	getRadius(){
		return this.radius;
	}
	//Returns color of circle
	getColor(){
		return this.color;
	}
	//Updates radius of circle with given value.
	setRadius(r){
		this.radius= r;
	}
	//Updates color of circle with input value.
	setColor(c){
		this.color=c;
	}
	// Calculats and returns circle area.
	grtArea(){
		return 2*(Math.PI)*this.radius ;
	}
}

//Creating three instances of Circle with different Radius and Color.
let obj1= new Circle();
let obj2= new Circle(10.0);
let obj3= new Circle(20,"Black");

//Verifying functions in circle class by calling with different instances created above.
console.log(`radius of obj1 is:  ${obj1.getRadius()}`);
console.log(`radius of obj2 is:  ${obj2.getRadius()}`);
console.log(`color of obj2 is:  ${obj2.getColor()}`);
console.log(`radius of obj3 is:  ${obj3.getRadius()}`);
console.log(`color of obj3 is:  ${obj3.getColor()}`);

