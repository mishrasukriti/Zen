let arr=[1,2,3,4,5];
 let res= [];
(function(arr){
	for(let i in arr) {
		
		let prime=function(n){
			if(n===1) return false;
			if(n===2 || n===3) return true;
			if(n%2==0) return false;
			for(let j=3; j<Math.sqrt(n); j+=2) if(n%j===0) return false;
			return true;
		}
		if(prime(arr[i])) res.push(arr[i]);
	} 
	return res;
})(arr);
console.log("Array containing prime numbers is:  "+ res);