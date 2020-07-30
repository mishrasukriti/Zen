function result(a,b){
	let num1=20, num2=10;
	let f=b[a];
	let ans= f(num1, num2);
	return ans;
}

let operation= [add,sub,mul];

let w= result(0,operation);
console.log("Addition is: " +w);

w= result(1,operation);
console.log("Subtraction is: " +w);

w= result(2,operation);
console.log("Multiplication is: " +w);

function add(a,b){
	return a+b;
}
function sub(a,b){
	return a-b;
}
function mul(a,b){
	return a*b;
}