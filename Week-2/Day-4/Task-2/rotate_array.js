let arr=[1,2,3,4];
let k=3;
arr=(function(arr,k){
	k=k%arr.length;
	if(k===arr.length || k===0) return arr;
	let a=arr.length-k;
	let res=[];
	for(let i=a; i<arr.length; i++) res.push(arr[i]);
	for(let i=0; i<a; i++) res.push(arr[i]);
	return res;

})(arr,k);
console.log("Array after rotation is:  "+ arr);