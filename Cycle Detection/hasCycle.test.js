const hasCycle = require('./hasCycle')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe("Testing hasCycle", () => {
  test("hasCycle() should return 0 for the list [1,2,3]", () => {
    let head1 = linkedListBuilder([1,2,3])
    let test = hasCycle(head1)
    expect(test).toBe(0);
  })
  test("hasCycle() should return 1 for the cycling list [1,2,3,1]", () => {
    let head1 = linkedListBuilder([4,5,6], 0)
    let test  = hasCycle(head1)
    expect(test).toBe(1);
  })
})