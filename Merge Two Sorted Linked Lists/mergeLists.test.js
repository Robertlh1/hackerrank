const mergeLists = require('./mergeLists')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe("Testing mergeLists", () => {
  test("mergeLists() should return [1,2,3,3,4] for the lists [1,2,3], [3,4]", () => {
    [1,2,3] [3,4]
    let head1 = linkedListBuilder([1,2,3]), head2 = linkedListBuilder([3,4])
    let test = mergeLists(head1, head2)
    let result = linkedListBuilder([1,2,3,3,4])
    expect(test).toEqual(result);
  })
  test("mergeLists() should return [1,2,4,5,6,10] for the lists [4,5,6], [1,2,10]", () => {
    let head1 = linkedListBuilder([4,5,6]), head2 = linkedListBuilder([1,2,10])
    let test  = mergeLists(head1, head2)
    let result = linkedListBuilder([1,2,4,5,6,10])
    expect(test).toEqual(result);
  })
})