var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
	let count=0, sum=0;
	for(let i=0; i<arr.length; i++){
		if(arr[i]<0) sum+=arr[i];
		else count++;
 	}
 let res=[];
 res.push(count);
 res.push(sum);
 return res;
}
var ar2 = countPositivesSumNegatives(arr);
console.log(ar2);