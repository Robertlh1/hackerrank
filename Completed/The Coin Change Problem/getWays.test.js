const getWays = require('./getWays')

describe("Testing getWays", () => {
  test("getWays() should return 3 for the input 3, [8,3,1,2]", () => {
    let test = getWays(3, [8,3,1,2])
    let result = 3
    expect(test).toBe(result);
  })
  test("getWays() should return 4 for the input 4, [1,2,3]", () => {
    let test  = getWays(4, [1,2,3])
    let result = 4
    expect(test).toBe(result);
  })
  test("getWays() should return 5 for the input 10, [2,5,3,6]", () => {
    let test  = getWays(10, [2,5,3,6])
    let result = 5
    expect(test).toBe(result);
  })
  test("getWays() should return 168312708 for the input 10, [2,5,3,6]", () => {
    let test  = getWays(219, [36,10,42,7,50,1,49,24,37,12,34,13,39,18,8,29,19,43,5,44,28,23,35,26])
    let result = 168312708
    expect(test).toBe(result);
  })
})