/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const ListNode = (val, next) => {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteDuplicates = (head) => {
    if (head) {
        let list = new ListNode(head.val);
        let listHead = list;

        while (head !== null) {
            if (head.val !== list.val) {
                list.next = new ListNode(head.val);
                list = list.next;
            }

            head = head.next;
        }

        return listHead;
    }

    return head;
};
