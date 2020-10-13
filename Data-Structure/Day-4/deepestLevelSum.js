/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var deepestLeavesSum = function(root) {
    if(root===null)	return 0;
	let q = [];
	let temp = root;
	q.push([root,1]);
	let lastDepth=1; 
    let ans = [];
   
	while(q.length!==0){
		let currNode = q[0][0];
		let currDepth= q[0][1];
		q.shift();
		if(currDepth>lastDepth){
			ans = [];
			lastDepth = currDepth;
		}
		
		ans.push(currNode.val);
		if(currNode.left!==null)    q.push([currNode.left, currDepth+1]);
		if(currNode.right!==null)    q.push([currNode.right, currDepth+1]);
	}
	let sum = 0;
	for(let val of ans) sum+=val;
	return sum;
};

