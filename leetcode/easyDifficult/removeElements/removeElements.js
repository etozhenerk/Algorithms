/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  const list = new ListNode();
  const headList = list;

  while (head) {
    if (head.val !== val) {
      list.next = new ListNode(head.val);
      list = list.next;
    }
    head = head.next;
  }

  return headList.next;
};
