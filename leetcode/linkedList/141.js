/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle_pointer = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};

// time o(1)

var hasCycle = function (head) {
  const chk = new Set();

  while (head) {
    if (chk.had(head)) return true;
    head = head.next;
  }
  return false;
};
