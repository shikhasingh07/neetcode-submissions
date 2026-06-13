/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
         const result = [];
    
    function traverse(node) {
        if (!node) return;
        
        traverse(node.left);  // 1. Left
        result.push(node.val); // 2. Root
        traverse(node.right); // 3. Right
    }
    
    traverse(root);
    return result;
    }
}
