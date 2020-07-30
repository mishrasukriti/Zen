let arr=["welcome","to","the","guvi"];
(function(arr){
	for (var i = 0; i < arr.length; i++) {
		arr[i]= arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
	}
})(arr);

console.log(arr);