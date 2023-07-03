const stockmax = require('./stockmax')

describe("Testing stockmax", () => {
  test("stockmax() should return 1 for the input [1,2]", () => {
    let test = stockmax([1,2])
    let result = 1
    expect(test).toBe(result);
  })
  test("stockmax() should return 0 for the input [2,1]", () => {
    let test = stockmax([2,1])
    let result = 0
    expect(test).toBe(result);
  })
  test("stockmax() should return 0 for the input [5,3,2]", () => {
    let test = stockmax([5,3,2])
    let result = 0
    expect(test).toBe(result);
  })
  test("stockmax() should return 197 for the input [1,2,100]", () => {
    let test  = stockmax([1,2,100])
    let result = 197
    expect(test).toBe(result);
  })
  test("stockmax() should return 3 for the input [1,3,1,2]", () => {
    let test  = stockmax([1,3,1,2])
    let result = 3
    expect(test).toBe(result);
  })
  test("stockmax() should return 6 for the input [1,2,3,4]", () => {
    let test  = stockmax([1,2,3,4])
    let result = 6
    expect(test).toBe(result);
  })
  test("stockmax() should return 4 for the input [5,4,3,4,5]", () => {
    let test  = stockmax([5,4,3,4,5])
    let result = 4
    expect(test).toBe(result);
  })
})