/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let ans = [];
    for(let i=0;i<366;i++)  ans[i]=0;
    let set = new Set();
    for(let val of days)    set.add(val);
    return dp(1,set,costs,ans);
};

function dp(i, set, cost,ans){
    if(i>365)   return 0;
    if(ans[i]!==0)  return ans[i];
    if(set.has(i)){
        ans[i] =Math.min(cost[0]+dp(i+1,set,cost,ans), cost[1]+dp(i+7,set,cost,ans));
        ans[i] = Math.min(ans[i],cost[2]+ dp(i+30,set,cost,ans));
    }
    else    ans[i] = dp(i+1,set,cost,ans);
    
    return ans[i];
}