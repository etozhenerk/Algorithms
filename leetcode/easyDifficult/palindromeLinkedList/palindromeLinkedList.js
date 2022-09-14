/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    return arr.join("") === arr.reverse().join("");
};
