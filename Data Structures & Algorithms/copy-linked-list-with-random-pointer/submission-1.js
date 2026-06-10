class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null;
        let map = new Map();
        let curr = head;
        while (curr !== null) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while (curr !== null) {
            map.get(curr).next = map.get(curr.next) ?? null;
            map.get(curr).random = map.get(curr.random) ?? null;
            curr = curr.next;
        }

        return map.get(head);
    }
}