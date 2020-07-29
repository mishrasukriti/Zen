function getNthElement(array,n){
 if(arr.length===0 || n<0) return undefined;
 return arr[n];
}
let arr=[1,2,3];
console.log(getNthElement(arr,1));