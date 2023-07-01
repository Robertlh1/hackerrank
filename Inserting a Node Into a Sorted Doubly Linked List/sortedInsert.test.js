const sortedInsert = require('./sortedInsert')
const doubleListBuilder = require('../Utility Functions/doubleListBuilder')

describe("Testing sortedInsert", () => {
  test("sortedInsert() should return [1,2,3,4] for the list [1,2,4], 3", () => {
    let head1 = doubleListBuilder([1,2,4])
    let test = sortedInsert(head1, 3)
    let result = doubleListBuilder([1,2,3,4])
    expect(test).toEqual(result);
  })
  test("sortedInsert() should return [1,3,4,5,10] for the list [1,3,4,10], 5", () => {
    let head1 = doubleListBuilder([1,3,4,10])
    let test  = sortedInsert(head1, 5)
    let result = doubleListBuilder([1,3,4,5,10])
    expect(test).toEqual(result);
  })
  test("sortedInsert() should return [1,2,3,4] for the list [2,3,4], 1", () => {
    let head1 = doubleListBuilder([2,3,4])
    let test  = sortedInsert(head1, 1)
    let result = doubleListBuilder([1,2,3,4])
    expect(test).toEqual(result);
  })
  test("sortedInsert() should return [1,2,3,4] for the list [1,2,3], 4", () => {
    let head1 = doubleListBuilder([1,2,3])
    let test  = sortedInsert(head1, 4)
    let result = doubleListBuilder([1,2,3,4])
    expect(test).toEqual(result);
  })
})