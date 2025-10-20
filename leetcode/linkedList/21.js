/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/**
    O(n+m) O(1) 더미 없이 head, tail로도 할수있음
 */
var mergeTwoLists_1 = function (list1, list2) {
  const result = new ListNode(0);
  let curr = result;
  let left = list1;
  let right = list2;
  while (left && right) {
    if (left.val <= right.val) {
      curr.next = left;
      left = left.next;
    } else {
      curr.next = right;
      right = right.next;
    }
    curr = curr.next;
  }

  while (left) {
    curr.next = left;
    left = left.next;
  }
  while (right) {
    curr.next = right;
    right = right.next;
  }
  return result.next;
};
var mergeTwoLists_1_2 = function (list1, list2) {
  const result = new ListNode(0);
  let curr = result;
  let left = list1;
  let right = list2;
  while (left && right) {
    if (left.val <= right.val) {
      curr.next = left;
      left = left.next;
    } else {
      curr.next = right;
      right = right.next;
    }
    curr = curr.next;
  }

  while (left) {
    curr.next = left;
    left = left.next;
  }
  while (right) {
    curr.next = right;
    right = right.next;
  }
  return result.next;
};
/*
O(n+m) , O(n+m)
*/
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
