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
    rotateRight(head, k) {
        if (!head || !head.next || k === 0) {
    return head;
  }

  let curr = head,
    prev = head,
    len = 1;
  while (curr.next !== null) {
    len++;
    curr = curr.next;
  }

  k = k % len;

  if (k === 0) return head;

  let steps = len - k - 1;

  let tail = head;
  curr.next = head;
  while (steps > 0) {
    tail = tail.next;
    steps--;
  }
  let currHead = tail.next;
  tail.next = null;
  return currHead;
    }
}
