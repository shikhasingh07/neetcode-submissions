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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeTwoLists(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        curr.next = l1 !== null ? l1 : l2;
        return dummy.next;
    }

    mergeKLists(lists) {
        if (lists.length === 0) return null;

        if (lists.length === 1) return lists[0];

        while (lists.length > 1) {
            let merged = [];
            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = lists[i + 1] ?? null;
                merged.push(this.mergeTwoLists(l1, l2));
            }
            lists = merged;
        }
        return lists[0];
    }
}
