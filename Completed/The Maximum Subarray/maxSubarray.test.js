const maxSubarray = require('./maxSubarray')

describe("Testing maxSubarray", () => {
  test("maxSubarray() should return [16,20] for the input [-1,2,3,-4,5,10]", () => {
    let test = maxSubarray([-1,2,3,-4,5,10])
    let result = [16,20]
    expect(test).toEqual(result);
  })
  test("maxSubarray() should return [10,10] for the input [1,2,3,4]", () => {
    let test  = maxSubarray([1,2,3,4])
    let result = [10,10]
    expect(test).toEqual(result);
  })
  test("maxSubarray() should return [10,11] for the input [2,-1,2,3,4,-5]", () => {
    let test = maxSubarray([2,-1,2,3,4,-5])
    let result = [10,11]
    expect(test).toEqual(result);
  })
  test("maxSubarray() should return [-1,-1] for the input [-2,-3,-1,-4,-6]", () => {
    let test  = maxSubarray([-2,-3,-1,-4,-6])
    let result = [-1,-1]
    expect(test).toEqual(result);
  })
})