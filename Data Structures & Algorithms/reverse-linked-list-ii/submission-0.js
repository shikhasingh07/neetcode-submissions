/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0);
        dummy.next = head;
        let prev = dummy;

        // Step 1: left se pehle pahuncho
        for (let i = 0; i < left - 1; i++) {
            prev = prev.next;
        }

        // Step 2: reverse karo
        let curr = prev.next;
        for (let i = 0; i < right - left; i++) {
            let next = curr.next;
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }

        return dummy.next;
    }
}
