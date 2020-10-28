 /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxlen = 1;
    let n = s.length;
    if(n==0)    return 0;
    for (let i = 0; i < 26; ++i) { 
            maxlen = Math.max(maxlen, findLen(s, n, k, String.fromCharCode(i+('A'.charCodeAt(0))))); 
    } 
    return maxlen;
};

function findLen(A, n, k, ch){
    let count = 0, maxlen = 1, l=0, r=0;
    while(r<n){ 
        if(A.charAt(r)!==ch)    count++;
        while(count>k){
            if(A.charAt(l)!==ch)    count--;
            l++;
        }
        
        maxlen = Math.max(maxlen, r-l+1);
        r++;
    }
    return maxlen;
}


 