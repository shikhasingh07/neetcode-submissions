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
     * @return {boolean}
     */
    isBalanced(root) {
        function helper(node) {
            if (node === null) {
                return 0;
            }

            let Lh = helper(node.left);
            let Rh = helper(node.right);

            if (Lh === -1 || Rh === -1) return -1;
            if (Math.abs(Lh - Rh) > 1) return -1;

            return 1 + Math.max(Lh, Rh);
        }
        return helper(root) !== -1;
    }
}
