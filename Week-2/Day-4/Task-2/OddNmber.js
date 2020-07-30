let arr=[1,2,3,4,5];
let res= [];
(function(arr){
	for(let i in arr) if(arr[i]%2!==0)  res.push(arr[i]);
})(arr);
console.log("Array having all odd numbers is: "+res);



