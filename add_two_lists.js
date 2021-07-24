/**
 * Definition for singly-linked list.

 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}

const addTwoNumbers = (l1, l2) => {
// Initialize current node to dummy head of the returning list.
    let currNode = new ListNode(0);
    // Initialize carry to 00.
    let sum = 0;
    let res = currNode;
    while(l1 || l2) {
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next
        }
        currNode.next = new ListNode(sum % 10);
        currNode = currNode.next
        sum = sum > 9 ? 1 : 0;
        // console.log(currNode)
        if(sum) {
            currNode.next = new ListNode(sum)
        }
    }
    return res
};
// let l1 = [2,4,3]
// let l2 = [5,6,4]
let l1 = new ListNode(2);
let l1Next = new ListNode(4);
l1.next = l1Next;
l1Next.next = new ListNode(3);
let l2 = new ListNode(5);
let l2Next = new ListNode(6);
l2.next = l2Next;
l2Next.next = new ListNode(5);

console.log(addTwoNumbers(l1, l2))
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
