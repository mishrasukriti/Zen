let arr= ["abc", "aba", "pqrqp", "cde", "dfggfd"];
let res=[];
(function(arr){
	for(let i=0; i<arr.length; i++){
		let str="";
		for(let j=arr[i].length-1; j>=0; j--) str+=arr[i].charAt(j);
		if(arr[i]===str) res.push(arr[i]);
	}
	
})(arr);
console.log(res);