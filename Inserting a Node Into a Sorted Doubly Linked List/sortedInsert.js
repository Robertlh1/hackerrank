const DoublyLinkedListNode = require('../Utility Functions/DoublyLinkedListNode')
const doubleListBuilder = require('../Utility Functions/doubleListBuilder')
function sortedInsert(llist, data) {
  // Write your code here
  let newLList = llist
  if (llist === null) return new DoublyLinkedListNode(data)
  if (data < llist.data) {
    llist.prev = new DoublyLinkedListNode(data)
    llist.prev.next = llist
    return llist.prev
  }
  while (true)  {
    debugger
      if (newLList.data > data) {
          let insert = new DoublyLinkedListNode(data)
          insert.prev = newLList.prev
          insert.next = newLList
          newLList.prev.next = insert
          newLList.prev = insert
          return llist
      }
      if (!newLList.next) {
          newLList.next = new DoublyLinkedListNode(data)
          newLList.next.prev = newLList
          return llist
      }
      newLList = newLList.next
  }
}

module.exports = sortedInsert