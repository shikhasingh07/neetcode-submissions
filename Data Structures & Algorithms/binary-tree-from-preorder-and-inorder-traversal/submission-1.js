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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
          if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  let root = preorder[0];
  let node = new TreeNode(root);
  let index = inorder.indexOf(root);

  node.left = this.buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  node.right = this.buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return node;
    }
}
