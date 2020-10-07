/**
*Function to find index of a target value k in given array 
*@param{number[]} arr
*@param{number} k
*@return{number}
*/

function searchValue(arr, k){
    let low = 0, high = arr.length-1;
    let ans = 0;
    
    while(low<=high){
        let mid = low + parseInt((high-low)/2);
        if(arr[mid]===k)  return mid;
        else if(arr[mid]>k)  high=mid-1;
        else    low = mid+1;
    }
    return low;
}