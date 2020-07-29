var obj = {
 "mykey": "value"
};
function addProperty(obj, key){
 obj[key]= true;
}
let str="newKey";
addProperty(obj,str);
console.log(obj);