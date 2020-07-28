 var obj = {"name" : "RajniKanth","age" : 33,"hasPets" : false};
let arr = [];
function printAllValues(obj) {
 for(let key in obj) arr.push(obj[key]);
 console.log(arr);
}
printAllValues(obj);
