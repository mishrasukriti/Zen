function divisibleByFive(num1) {
	let a=num1%10 + ((num1/10)%10)*10;
	if(a===0 || a%5===0) return true;
	return false;
}
var divisible = divisibleByFive(37);
console.log("37 divisible by 5 is: "+divisible);