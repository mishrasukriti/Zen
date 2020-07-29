function getOpposite(num) {
	let type= typeof num;
	if(type!=="number") return -1;
	if((num*10)%10 !==0) return -1;
	if(num<0) return num - 2*num;
	return num - 2*num;
}
console.log("Opposite of 5 is: " + getOpposite(5));
console.log("Opposite of -10 is: " + getOpposite(-10));
console.log("Opposite of 5.5 is: " + getOpposite(5.5));
console.log("Opposite of 4a is: " + getOpposite("4a"));