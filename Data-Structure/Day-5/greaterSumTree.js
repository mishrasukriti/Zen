/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int sum;
    public TreeNode bstToGst(TreeNode root) {
        List<TreeNode> list = new ArrayList<>();
        inorder(list, root);
        int leftSum = 0;
        for(int i = 0; i < list.size(); i++){
            TreeNode curr = list.get(i);
            int temp = curr.val;
            curr.val = sum - leftSum;
            leftSum += temp;
        }
        return root;
    }
    public void inorder(List<TreeNode> res, TreeNode root){
        Stack<TreeNode> stack = new Stack<>();
        TreeNode current = root;        
        while(true){
            while(current != null){
                stack.push(current);
                current = current.left;
            }
            if(stack.isEmpty()) break;
            current = stack.pop();
            res.add(current);
            sum += current.val;
            current = current.right;
        }
    }
}