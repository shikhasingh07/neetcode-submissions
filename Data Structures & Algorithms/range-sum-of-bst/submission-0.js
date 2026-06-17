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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
         let total = 0;
function isVaild(root, low, high) {
    if (root === null) {
        return;
    }

    if (root.val < low) {
        isVaild(root.right, low, high);

    }
    else if (root.val > high) {
        isVaild(root.left, low, high);
    } else {
        total += root.val;
        isVaild(root.left, low, high);
        isVaild(root.right, low, high);
    }

}
    isVaild(root, low, high);
    return total;
    }
}
