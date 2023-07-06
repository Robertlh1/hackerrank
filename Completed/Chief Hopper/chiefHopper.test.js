const chiefHopper = require('./chiefHopper')

describe("Testing chiefHopper", () => {
  test("chiefHopper() should return 3 for the input [2,3,4,3,2]", () => {
    let test = chiefHopper([2,3,4,3,2])
    let result = 3
    expect(test).toEqual(result);
  })
  test("chiefHopper() should return 4 for the input [3,4,3,2,4]", () => {
    let test  = chiefHopper([3,4,3,2,4])
    let result = 4
    expect(test).toBe(result);
  })
  test("chiefHopper() should return 4 for the input [4,4,4]", () => {
    let test  = chiefHopper([4,4,4])
    let result = 4
    expect(test).toBe(result);
  })
  test("chiefHopper() should return 3 for the input [1,6,4]", () => {
    let test  = chiefHopper([1,6,4])
    let result = 3
    expect(test).toBe(result);
  })
  test("chiefHopper() should return 3 for the input [4,4]", () => {
    let test  = chiefHopper([4,4])
    let result = 3
    expect(test).toBe(result);
  })
})