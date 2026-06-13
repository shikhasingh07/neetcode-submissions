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
    preorderTraversal(root) {
        const result = [];

        function traverse(node) {
            if (!node) return;

            result.push(node.val);
            traverse(node.left); // 1. Left
            // 2. Root
            traverse(node.right); // 3. Right
        }

        traverse(root);
        return result;
    }
}
