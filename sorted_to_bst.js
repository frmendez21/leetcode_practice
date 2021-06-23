// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 };
 
const sortedArrayToBST = nums => {
    if(!nums.length) return null;
    if(nums.length === 1) return new TreeNode(nums[0])
    let midIdx = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[midIdx]);
    let left = nums.slice(0, midIdx);
    let right = nums.slice(midIdx + 1);
    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);
    return root;
};
 
console.log(sortedArrayToBST([-10,-3,0,5,9]))

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.