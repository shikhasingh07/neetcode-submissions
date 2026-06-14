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
    goodNodes(root) {
        let count = 0;
  function greater(root, gVal) {
    if (root === null) {
      return;
    }
    if (root.val >= gVal) {
      count++;
    }

    gVal = Math.max(gVal, root.val);
    greater(root.left, gVal);
    greater(root.right, gVal);
  }
  greater(root, root.val);
  return count;
    }
}
