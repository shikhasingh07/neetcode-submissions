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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = [];

        function dfs(node) {
            if (node === null) {
                result.push("null");
                return;
            }
            result.push(node.val); // node ka value
            dfs(node.left); // left
            dfs(node.right); // right
        }

        dfs(root);
        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let nodes = data.split(",");
        let index = 0;

        function dfs() {
            if (nodes[index] === "null") {
                index++;
                return null; // kya return karoge?
            }

            let node = new TreeNode(Number(nodes[index]));
            index++;
            node.left = dfs();
            node.right = dfs();
            return node;
        }

        return dfs();
    }
}
