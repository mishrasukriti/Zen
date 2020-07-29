function findMax(arr)
{
	let max= Number.MIN_VALUE;
	for (var i = 0; i < arr.length; i++) {
		if(max<arr[i]) max=arr[i];
	}
	return max;
}
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(arr);
console.log("Max: "+ max);