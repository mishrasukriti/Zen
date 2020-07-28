var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

function fromListToObject(arr) {
 var newObject = {};
 for(let i=0; i<arr.length; i++){
 	let tempArr=arr[i];
 	let key=tempArr[0];
 	let value= tempArr[1];
 	newObject[key]= value;
 }
 return newObject;
}

let obj= fromListToObject(arr);
console.log(obj);