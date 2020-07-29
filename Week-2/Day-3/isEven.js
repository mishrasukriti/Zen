function isEven(num){
 if((typeof num)!=="number") return -1;
 if(num%2===0) return true;
 return false;
}
var even = isEven(5);
console.log(even);