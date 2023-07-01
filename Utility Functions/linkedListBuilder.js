const ListNode = require('./ListNode')

function linkedListBuilder(arr, cycle) {
  if (!arr || arr.length <= 0) return null
  let root = new ListNode(arr[0]), temp = root, cyclePoint = null
  if (cycle === 0) cyclePoint = root
  if (cycle === 0 && arr.length === 1) root.next = cyclePoint
  if (arr.length === 1) return root

  for (let i = 1; i < arr.length; i++) {
    temp.next = new ListNode(arr[i])
    temp = temp.next
    if (cycle && i === cycle) cyclePoint = temp
  }

  temp.next = cyclePoint
  return root
}

module.exports = linkedListBuilder