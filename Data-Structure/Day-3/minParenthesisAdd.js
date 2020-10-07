/**
 * @param {string} p
 * @return {number}
 */
var minAddToMakeValid = function(p) {
   let unbalanceOpenParanthesis = 0;  
        let unbalanceCloseParanthesis = 0;  
        
        for (let i = 0; i < p.length; ++i) {  
        
            unbalanceOpenParanthesis += p.charAt(i) === '(' ? 1 : -1;  
        
            // It is guaranteed bal >= -1  
            if (unbalanceOpenParanthesis === -1) {  
                unbalanceCloseParanthesis += 1;  
                unbalanceOpenParanthesis += 1;  
            }  
        }  
        
        return unbalanceOpenParanthesis + unbalanceCloseParanthesis;  
};