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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while (curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next; // skip karo
        } else {
            curr = curr.next;
        }
    }
    return dummy.next;
    }
}
