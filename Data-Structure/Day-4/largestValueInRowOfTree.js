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
 * @return {number[]}
 */
var largestValues = function(root) {
    let ans = [];
    if(root===null)	return ans ;
	let q = [];
	let temp = root;
	q.push([root,1]);
	let lastDepth=1; 
    
    ans[0]=root.val;
    i=0;
	while(q.length!==0){
		let currNode = q[0][0];
		let currDepth= q[0][1];
		q.shift();
		if(currDepth>lastDepth){
			ans[++i] = [currNode.val];
			lastDepth = currDepth;
		}
        ans[i] = Math.max(ans[i],currNode.val);
		if(currNode.left!==null)    q.push([currNode.left, currDepth+1]);
		if(currNode.right!==null)    q.push([currNode.right, currDepth+1]);
	}
	return ans;

};
