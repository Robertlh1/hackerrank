/*
*/

function isBalanced(s) {
  // Write your code here
  let openingBrackets = {'(': ')', '{': '}', '[': ']'}
  let closingBrackets = {')': '(', '}': '{', ']': '['}
  let queue = [], end = 0
  for (let i = 0; i < s.length; i++) {
    if (openingBrackets[s[i]]) {
      queue.push(s[i])
      end = queue.length - 1
    } else {
      if (queue[end] !== closingBrackets[s[i]]) return 'NO'
      queue.pop()
      end = queue.length - 1
    }
  }
  return queue.length === 0 ? 'YES' : 'NO'
}

module.exports = isBalanced
console.log(isBalanced('{(([])[])[]}[]'))