var arr = [1, 2, 3];
function hourToSeconds(arr) {
	let res=[];
	for(let i=0; i<arr.length; i++) res[i]=arr[i]*3600;
	return res;
}
var data = hourToSeconds(arr);
console.log(data);