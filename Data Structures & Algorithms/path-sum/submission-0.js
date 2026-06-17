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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
         let total = 0;
  function hasTotal(root, targetSum) {
    if(!root) return false
    if (root === null) {
      return null;
    }

    if (root.left === null && root.right === null) {
      return targetSum - root.val === 0;
    }

    return (
      hasTotal(root.left, targetSum - root.val) ||
      hasTotal(root.right, targetSum - root.val)
    );
  }
  return hasTotal(root, targetSum);
    }
}
