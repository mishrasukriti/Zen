let arr=[1,2,3,4,5];
 let sum= 0;
(function(arr){
	for(let i in arr) sum+=arr[i];
	return sum;
})(arr);
console.log("Sum of all elements is: "+ sum);