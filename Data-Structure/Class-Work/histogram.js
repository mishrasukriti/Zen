/**
*@param{number[]} arr
**/

fun(arr){
	let n = arr.length;
	let curr = 0, maxArea, top;
	let st = new Stack();
	while(curr<n){
		if(st.isEmpty() || arr[st.peek()]<=arr[curr]){
			st.push(curr);
			curr++;
		}
		else{
			let top = st.pop();
			topArea = arr[top]*(st.isEmpty()?curr: curr-st.peek()-1);
			maxArea = Math.max(maxArea, topArea);
		}
	}

	while(!st.isEmpty()){
		let top = st.pop();
		topArea = arr[top]*(st.isEmpty()?curr: curr-st.peek()-1);
		maxArea = Math.max(maxArea, topArea);
	}

	return maxArea;
}