let arr1=[1,4,7,9];
let arr2=[2,5,6,8];
let n= arr1.length;
let ans= (function(arr1,arr2) {
	for(let k=0; k<n; k++){
		let res=[];
		let i=0, j=0;
		while(i<n && j<n){
			if(arr1[i]<=arr2[j]) {
				res.push(arr1[i]);
				i++;
			}
			else{
				res.push(arr2[j]);
				j++;
			}
		}
		while(i<n) res.push(arr1[i++]);
		while(j<n) res.push(arr2[j++]);
		return (res[n-1]+res[n])/2;
	}
})(arr1, arr2);
console.log(ans);
