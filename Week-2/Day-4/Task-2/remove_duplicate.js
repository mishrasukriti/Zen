let arr=[1,1,1,4,5,6,5];
let ans=(function(arr){
	let map =new Map();
	let res=[];
	for(let i=0; i<arr.length; i++){
		if(map.has(arr[i])) map.set(arr[i], map.get(arr[i])+1);
		else map.set(arr[i],1);
	}
	for(let [key,value] of map.entries()){
		if(value===1) res.push(key);
	}
	return res;
})(arr);
console.log("Array after removing duplicates is:  "+ans);