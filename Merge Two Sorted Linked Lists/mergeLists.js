/*
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

Example
HeadA refers to 1 > 3 > 7 > NULL
HeadB refers to 1 > 2 > NULL

The new list is 1 > 1 > 2 > 3 > 7 > NULL
*/

function SinglyLinkedListNode(data) {
  this.data = data || null
  this.next = null
}

function mergeLists(head1, head2) {
  debugger
  let newList = new SinglyLinkedListNode(), currNode = newList
  if (head1.data < head2.data) {newList.data = head1.data; head1 = head1.next}
  else {newList.data = head2.data; head2 = head2.next}

  while (true) {
      let nextNode = new SinglyLinkedListNode()
      if (head1 && head2) {
          if (head1.data < head2.data) {nextNode.data = head1.data; head1 = head1.next}
          else {nextNode.data = head2.data; head2 = head2.next}
          currNode.next = nextNode
          currNode = currNode.next
      } else {
          currNode.next = head1 || head2
          debugger
          return newList
      }
  }
}

module.exports = mergeLists