fun nextArr(arr){
	let n= arr.length;
	let i=0;
	let ans=[];
	while(i<n){
		if(st.isEmpty())	st.push(i);
		if(st.isEmpty() && st.peek()>=arr[i]){
			st.push(i);
			i++;
		}
		else{
			ans[st.peek()] = arr[i];
			st.pop();
		}
	}
	while(!st.isEmpty()){
		ans[st.peek()] = -1;
		st.pop();
	}
	return ans;
}