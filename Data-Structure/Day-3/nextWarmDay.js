/**
*Function to find next warmer day wait
*@param{number[]} arr
*@return{number[]}
*/

function nextWarmDayWait(arr){
	let st = [];
   	let ans = [];
   	let i=0;

    while(i<arr.length){
      if(st.length===0)st.push(i);
      else if(st.length!==0 && arr[st[st.length-1]]>=arr[i]){
          st.push(i);
          i++;
      } 
      else {
          ans[st[st.length-1]] = i- st[st.length-1];
          st.pop();
      }
  	}
  
  	while(st.length!==0){
      ans[st[st.length-1]] = 0;
      st.pop();
  	}

  	return ans;
}