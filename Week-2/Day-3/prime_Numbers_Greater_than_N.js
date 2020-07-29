function isprime(n){
	if(n===2 ) return true;
	if(n%2===0) return false;
	for (var i = 3; i <= Math.sqrt(n); i++) {
		if(n%i===0) return false
	}
	return true;
}

function firstNPrime(n, startAt){
	let res=[];
	let count=0, i=startAt+1;
	while(count<=n){
		if(isprime(i)) {
			res.push(i);
			count++;
		}
		i++;
	}
	return res;
}
let ans= firstNPrime(10,5);
console.log("First 10 prime numbers greater than 5 are: "+ ans);