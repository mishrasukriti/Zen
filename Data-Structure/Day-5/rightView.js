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
var rightSideView = function(root) {
    let ans = [];
    if(root===null)	return ans ;
	let q = [];
	let temp = [];
	q.push([root,1]);
	let lastDepth=1; 
    ans=[];
	while(q.length!==0){
		let currNode = q[0][0];
		let currDepth= q[0][1];
		q.shift();
		if(currDepth>lastDepth){
			ans.push(temp[temp.length-1]) ;
            temp = [];
			lastDepth = currDepth;
		}
        temp.push(currNode.val);
		if(currNode.left!==null)    q.push([currNode.left, currDepth+1]);
		if(currNode.right!==null)    q.push([currNode.right, currDepth+1]);
	}
    if(temp.length!==0)  ans.push(temp[temp.length-1]) ;
	return ans;

};