function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const isBalanced = root => {
    if(!root) return true;
    return Math.abs(findDepth(root.left) - findDepth(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
};

const findDepth = root => {
    if(!root) return -1;
    return 1+ Math.max(findDepth(root.left), findDepth(root.right))
};

let root = new TreeNode(3);
let nine = new TreeNode(9);
let twenty = new TreeNode(20);
let fifteen = new TreeNode(15);
let seven = new TreeNode(7);
root.left = nine;
root.right = twenty;
twenty.left = fifteen;
twenty.right = seven;

console.log(root)
console.log(isBalanced(root))
// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 