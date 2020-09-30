/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let n = nums.length;
    if(n==1)    return 1;
    let st = 0, end = 1, ans=0;
    let curr_max = Math.max(nums[st], nums[end]);
    let curr_min = Math.min(nums[st], nums[end]);
    while(st<n && end<n){ 
        if(Math.abs(curr_max-curr_min)>limit){
            st++;
            end++;
            if(end<n)  {
                curr_max = findMax(nums,st,end);
                curr_min = findMin(nums,st,end)
            } 
        }
        else{
            if((end-st+1)>ans)  ans = end-st+1;
            end++;
            if(end<n){
                curr_max = Math.max(curr_max,nums[end]);
                curr_min = Math.min(curr_min,nums[end]);
            }
        }
    }
    return ans
};

function findMax(nums, st, end){
    let max = nums[st];
    for(let i=st+1; i<=end; i++)    if(max<nums[i]) max=nums[i];
    return max;
}

function findMin(nums, st, end){
    let min = nums[st];
    for(let i=st+1; i<=end; i++)    if(min>nums[i]) min=nums[i];
    return min;
}