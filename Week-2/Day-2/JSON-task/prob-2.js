var obj = {"name" : "RajniKanth","age" : 33,"hasPets" : false};
let arr=[];
function printAllKeys(obj) {
	for(let key in obj) arr.push(key);
 	console.log(arr);
}
 printAllKeys(obj);