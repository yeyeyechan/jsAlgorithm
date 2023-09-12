/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;
  const len = nums.length;
  const mid = Math.floor(len / 2);
  const treenode = new TreeNode(nums[mid]);

  treenode.left = sortedArrayToBST(nums.slice(0, mid));
  treenode.right = sortedArrayToBST(nums.slice(mid + 1, len));

  return treenode;
};
