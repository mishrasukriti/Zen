/**
 * @param {string} s
 * @param {number} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let curr_max = Math.MIN_VALUE;
    let sum = 0;
    let i=0, n=s.length;
    while(i<n  ){
        curr_max = cost[i];
        let curr_sum = cost[i];
        if(s.charAt(i)===s.charAt(i+1)){
            while(i<n-1 && s.charAt(i)===s.charAt(i+1)){
            curr_max = Math.max(curr_max,cost[i+1]);
            curr_sum+=cost[i+1];
            i++;
            }
        }
        else i++;
        curr_sum-=curr_max;
        sum+=curr_sum;
    }
    return sum;
};