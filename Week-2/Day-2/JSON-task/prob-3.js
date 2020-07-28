var obj = {"name": "ISRO", "age": 35, "role": "Scientist"};
      
var result = Object.keys(obj).map(function (key) {
	return [key, obj[key]]; 
}); 
console.log(result);