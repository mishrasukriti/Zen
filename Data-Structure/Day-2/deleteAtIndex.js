class ListNode{
	constructor(element) 
    { 
        this.data = element; 
        this.next = null;
    } 
}

/**
 * @param {Number} index
 * @param {ListNode} head
 * @return {ListNode}
 */
function delete(index,head){
	let temp = head;
	
	if(index===0) {
		return head.next;
	}
	let count = 0;
	while(temp.next!=null){
		if(count===index-1)	break;
		temp = temp.next;
		count++;
	}	

	if(count===index-1 ){
		if(temp.next!==null)	temp.next = temp.next.next;
		else temp.next= null;
	}
	return head;
}