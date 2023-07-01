function DoublyLinkedListNode(data, next, prev) {
  this.data = data || null
  this.next = next || null
  this.prev = prev || null
}

module.exports = DoublyLinkedListNode