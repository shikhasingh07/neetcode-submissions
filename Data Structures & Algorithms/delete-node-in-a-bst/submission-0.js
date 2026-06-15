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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (root === null) return null;

        if (root.val > key) {
            root.left = this.deleteNode(root.left, key);
        } else if (root.val < key) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (!root.left) return root.right;
            if (!root.right) return root.left;
            let minNode = root.right;
            while (minNode.left) minNode = minNode.left;

            root.val = minNode.val;
            root.right = this.deleteNode(root.right, minNode.val);
        }
        return root;
    }
}
