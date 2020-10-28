class ListNode{
	constructor(element) 
    { 
        this.data = element; 
        this.next = null;
    } 
}

/**
 * @param {Number} index
 * @param {Number} element
 * @param {ListNode} head
 * @return {ListNode}
 */
function insert(index, element, head){
	let temp = head;
	let newNode = new ListNode(element);
	
	if(index===0) {
		newNode.next= head;
		head = newNode;
		return head;
	}
	let count = 0;
	while(temp.next!=null){
		if(count===index-1)	break;
		temp = temp.next;
		count++;
	}	

	if(count===index-1){
		newNode.next = temp.next;
		temp.next = newNode;
	}
	return head;
}