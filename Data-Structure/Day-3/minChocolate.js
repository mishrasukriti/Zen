/**
*Function to find minimum number of chocolate to eat up all the piles within given hours h.
*@param{number[]} arr
*@param{number} h
*@return{number}
*/

function minChocolate(arr,h){
    let low=1, high=0, ans = Number.MAX_VALUE;
    for(let val of arr)  if(val>high)    high=val;
    while(low<=high){
       let mid = low + parseInt((high-low)/2);
       let tempArr = arr.slice(0);
       let count = 0;
       for(let i=0; i<tempArr.length; i++){
           while(tempArr[i]!==0){
               tempArr[i] = (tempArr[i]-mid)>0? tempArr[i]-mid:0;
               count++;
           }
       }
       if(count<=h) {
           high = mid-1;
           ans = Math.min(ans, mid);
       } 
       else {
           low = mid+1;
       }
   	}
   	return ans;
}