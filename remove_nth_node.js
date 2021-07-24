// Given the head of a linked list, remove the nth node from the end of the list and return its head.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
*/
class ListNode{
    constructor(val=0, next=null) {
        this.val = val;
        this.next = next;
    }
};

// var removeNthFromEnd = function(head, n) {

//     const findPrevNode = (node, n) => {
//         if(!node.next) return node;
//         // console.log(arguments)

//         let prev = node;
//         let curr = prev;
//         while(n > 0) {
//             curr = curr.next;
//             n--;
//             if(!curr) break;
//         }
        
//         return !curr || !curr.next ? prev : null; 
//     }

//     let prevNode = findPrevNode(head, n);
//     let removeNode = prevNode && prevNode.next ? prevNode.next : null;
//     let newNext = removeNode && removeNode.next ? removeNode.next : null;
//     console.log('prev', prevNode)
//     console.log('rem', removeNode)
//     console.log('newnext', newNext)
//     if(!prevNode) {
//         removeNthFromEnd(head.next, n)
//     } else if (removeNode && newNext) {
//         prevNode.next = newNext;
//     } else if(!newNext && removeNode) {
//         head = head.next;
//         head.next = null;
//     } else {
//         head = null;
//     }
//     return head;
// };

var removeNthFromEnd = function(head, n) { 
    let curr = head;
    let prev = curr;
    let i = n;
    while(i > 0) {
        curr = curr.next;
        i--;
    }
  
    if(!curr) {
        head = head.next;
    } else if(!curr.next && prev) {
        if(prev.next && prev.next.next) {
            prev.next = prev.next.next;
        } else {
            prev.next = null;
        }
    } else {
        removeNthFromEnd(head.next, n)
    }

    return head;

}
const head = new ListNode(1);
head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(head, 2));
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Input: head = [1], n = 1
// Output: []
// 
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz