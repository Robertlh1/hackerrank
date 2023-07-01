/*
A linked list is said to contain a cycle if any node is visited more than once while traversing the list. Given a pointer to the head of a linked list, determine if it contains a cycle. If it does, return 1. Otherwise, return 0.

Example
head refers to the list of nodes 1 > 2 > 3 > NULL

The numbers shown are the node numbers, not their data values. There is no cycle in this list so return 0.

head refers to the list of nodes 1 > 2 > 3 > 1

There is a cycle where node 3 points back to node 1, so return 1.
*/

function hasCycle(head) {
  let fast = head, slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return 1
  }
  return 0
}

module.exports = hasCycle