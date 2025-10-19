/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers_1 = function (l1, l2) {
  let result = new ListNode(0);
  let curr = result;
  let addNum = 0;

  while (l1 || l2 || addNum) {
    const val1 = l1?.val || 0;
    const val2 = l2?.val || 0;
    let sum = val1 + val2 + addNum;
    addNum = Math.floor(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
  }
  return result.next;
};

var addTwoNumbers = function (l1, l2, carry) {
  if (!l1 && !l2 && !carry) return null;
  const sum = l1 || 0 + l2 || 0 + carry;

  return new ListNode(
    sum % 10,
    new addTwoNumbers(l1.next, l2.next, Math.floor(sum / 10))
  );
};
