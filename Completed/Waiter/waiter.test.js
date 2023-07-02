const waiter = require('./waiter')

describe("Testing waiter", () => {
  test("waiter() should return [2,4,6,3,5,7] for the input [2,3,4,5,6,7], 3", () => {
    let test = waiter([2,3,4,5,6,7], 3)
    let result = [2,4,6,3,5,7]
    expect(test).toEqual(result);
  })
  test("waiter() should return [4,6,3,7,5] for the input [3,4,7,6,5], 1", () => {
    let test  = waiter([3,4,7,6,5], 1)
    let result = [4,6,3,7,5]
    expect(test).toEqual(result);
  })
  test("waiter() should return [4,4,9,3,3] for the input [3,3,4,4,9], 2", () => {
    let test  = waiter([3,3,4,4,9], 2)
    let result = [4,4,9,3,3]
    expect(test).toEqual(result);
  })
})