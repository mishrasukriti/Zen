class ListNode{
	constructor(element) 
    { 
        this.data = element; 
        this.next = null;
    } 
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function getMiddle(head){
	let fast = head;
	let slow = head;
	while(fast.next!=null && fast.next.next!=null){
		fast = fast.next.next;
		slow= slow.next;
	}
	if(fast.next!==null){
		console.log("Even number of nodes in the list. Returning first middle element: ");
	}
	else console.log("Odd number of nodes in the list.");
	return slow;
}