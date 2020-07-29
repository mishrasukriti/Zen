var obj = {
 "mykey": "value",
 "cow": 'foo'
};
function removeProperty(obj, key){
 delete obj[key];
}
removeProperty(obj,"mykey");
console.log(obj);