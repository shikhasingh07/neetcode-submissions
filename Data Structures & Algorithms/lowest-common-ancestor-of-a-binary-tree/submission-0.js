/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (root === null) {
            return root;
        }
        if (root === p || root === q) {
            return root;
        }

        let llca = this.lowestCommonAncestor(root.left, p, q);
        let rlca = this.lowestCommonAncestor(root.right, p, q);

        if (llca !== null && rlca !== null) return root;
        return llca !== null ? llca : rlca;
    }
}
