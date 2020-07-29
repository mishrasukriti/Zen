var obj = {
 "mykey": "value"
};
function getProperty(obj, key) {
 return obj[key];
}
console.log(getProperty(obj,"mykey"));
console.log(getProperty(obj,"dummykey"));
