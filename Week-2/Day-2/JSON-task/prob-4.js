let arr = ["GUVI", "I", "am", "a geek"];
//console.log(arr.length);
function transformFirstAndLast(arr) {
 let newObject={};
 let key=arr[0];
 newObject.key=arr[arr.length-1];
 return newObject;
}
let obj=transformFirstAndLast(arr);
console.log(obj);

