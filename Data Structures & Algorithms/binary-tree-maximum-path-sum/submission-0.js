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
     * @return {number}
     */
    maxPathSum(root) {
            let maxSum = -Infinity;
            function dfs(node) {
                if (node === null) return 0;

                let left = Math.max(dfs(node.left), 0); // left se max gain
                let right = Math.max(dfs(node.right), 0); // right se max gain

                maxSum = Math.max(maxSum, left + node.val + right);

                // parent ko sirf EK side return karo
                return node.val + Math.max(left, right);
            }

            dfs(root);
            return maxSum;
    }
}
