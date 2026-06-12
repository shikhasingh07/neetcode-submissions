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
     * @param {number} k
     * @return {ListNode}
     */
    reverse(head, stop) {
        let prev = null;
        let curr = head;

        while (curr !== stop) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    reverseKGroup(head, k) {
        let curr = head;
        for (let i = 0; i < k; i++) {
            if (curr === null) return head; // k nodes nahi hain
            curr = curr.next;
        }

        let newHead = this.reverse(head, curr);
        head.next = this.reverseKGroup(curr, k);
        return newHead;
    }
}
