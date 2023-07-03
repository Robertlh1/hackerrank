/*
You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they are all the same height, then return the height.

Example
h1 = [1,2,1,1]
h2 = [1,1,2]
h3 = [1,1]

There are 4, 3 and 2 cylinders in the three stacks, with their heights in the three arrays. Remove the top 2 cylinders from h1 (heights = [1, 2]) and from h2 (heights = [1, 1]) so that the three stacks all are 2 units tall. Return 2 as the answer.

Note: An empty stack is still a stack.
*/

function equalStacks(h1, h2, h3) {
  // Write your code here
  let i = 0, totals = [0,0,0]
  let arrays = [[...h1], [...h2], [...h3]]
  while (h1[i] || h2[i] || h3[i]) {
    if (h1[i]) totals[0] += h1[i]
    if (h2[i]) totals[1] += h2[i]
    if (h3[i]) totals[2] += h3[i]
    i++
  }
  let min = Math.min(totals[0], totals[1], totals[2])
  while (totals[0] !== totals[1] || totals[0] !== totals[2]) {
    for (let i = 0; i < 3; i++) {
      if (totals[i] === min) continue
      else if (totals[i] !== min) {
        totals[i] -= arrays[i][0]
        min = Math.min(totals[i], min)
        arrays[i].shift()
      }

    }
  }
  return min
}

module.exports = equalStacks
console.log(equalStacks([3,2,1,1,1],[4,3,2],[1,1,4,1]))