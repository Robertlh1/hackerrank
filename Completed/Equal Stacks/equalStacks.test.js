const equalStacks = require('./equalStacks')

describe("Testing equalStacks", () => {
  test("equalStacks() should return 2 for the input [1,2,1,1],[1,1,2],[1,1]", () => {
    let test = equalStacks([1,2,1,1],[1,1,2],[1,1])
    let result = 2
    expect(test).toEqual(result);
  })
  test("equalStacks() should return 5 for the input [3,2,1,1,1],[4,3,2],[1,1,4,1]", () => {
    let test  = equalStacks([3,2,1,1,1],[4,3,2],[1,1,4,1])
    let result = 5
    expect(test).toBe(result);
  })
})