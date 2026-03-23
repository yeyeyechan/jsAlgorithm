/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head;
  let curr = head;
  let idx = 1;
  let from = null;
  let to = null;
  let before = null;
  let newHead = null;
  while (idx <= right) {
    const next = curr.next;
    if (idx < left) {
      from = curr;
      before = curr;
    } else if (idx >= left && idx <= right) {
      curr.next = before;
      before = curr;
    }
    curr = next;
    idx++;
  }
  if (from) {
    to = from.next;
    from.next = before;
  }
  if (to) to.next = curr;
  if (from) newHead = head;
  else if (!from) newHead = before;
  return newHead;
};
