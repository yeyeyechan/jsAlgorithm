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
var copyRandomList = function (head) {
  if (head === null) return null;
  const result = new _Node(head.val, null, null);
  let curr = result;
  let curHead = head;
  const resultRandom = new Map();
  resultRandom.set(curHead, curr);
  while (curHead.next) {
    curr.next = new _Node(curHead.next.val, null, null);
    curr = curr.next;
    resultRandom.set(curHead.next, curr);
    curHead = curHead.next;
  }
  let curr2 = result;
  let curHead2 = head;

  while (curHead2) {
    curr2.random = curHead2.random ? resultRandom.get(curHead2.random) : null;
    curr2 = curr2.next;
    curHead2 = curHead2.next;
  }

  return result;
};
