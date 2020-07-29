function isprime(n){
	if(n===2 ) return true;
	if(n%2===0) return false;
	for (var i = 3; i <= Math.sqrt(n); i++) {
		if(n%i===0) return false
	}
	return true;
}

function firstNPrime(n){
	let res=[];
	let count=0, i=2;
	while(count<=n){
		if(isprime(i)) {
			res.push(i);
			count++;
		}
		i++;
	}
	return res;
}
let ans= firstNPrime(100);
console.log("First 100 prime numbers are: "+ ans);