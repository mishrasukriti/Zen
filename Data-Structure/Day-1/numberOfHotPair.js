/**
 * @param {number[]} arr
 * @return {number}
 */
function countHotPair(arr){
	let numberOfHotPAir = 0;
	let map = new Map();
	for(let i=0; i<arr.length; i++){
		if(map.has(arr[i]))	map.set(arr[i], map.get(arr[i])+1);
		else	map.set(arr[i], 1);
	}

	for(let value of map.values()){
		numberOfHotPAir+= value*(value-1)/2;
	}
	return numberOfHotPAir;
}