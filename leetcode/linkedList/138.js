/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
//original
var copyRandomList = function (head) {
  if (head === null) return null;
  const result = new _Node(head.val, null, null);
  let curr = head;
  let copy = result;
  const map = new Map();
  map.set(curr, copy);
  while (curr.next) {
    copy.next = new _Node(curr.next.val, null, null);
    copy = copy.next;
    curr = curr.next;
    map.set(curr, copy);
  }
  curr = head;
  copy = result;
  while (curr) {
    copy.random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
    copy = copy.next;
  }
  return result;
};
var copyRandomList_2 = function (head) {
  if (head === null) return null;
  const map = new Map();
  let curr = head;
  while (curr) {
    map.set(curr, new _Node(curr.val, null, null));
    curr = curr.next;
  }
  curr = head;
  while (curr) {
    const copy = map.get(curr);
    copy.next = curr.next ? map.get(curr.next) : null;
    copy.random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
  }

  return map.get(head);
};
//O(n),O(1)

var copyRandomList_3 = function (head) {
  if (!head) return null;
  let curr = head;

  while (curr) {
    const copy = new _Node(curr.val, curr.next, null);
    curr.next = copy;
    curr = copy.next;
  }
  curr = head;
  while (curr) {
    curr.next.random = curr.random ? curr.random.next : null;
    curr = curr.next.next;
  }
  curr = head;
  const copyHead = curr.next;
  while (curr) {
    const copy = curr.next;
    curr.next = copy.next;
    copy.next = curr.next ? curr.next.next : null;
    curr = curr.next;
  }
  return copyHead;
};
