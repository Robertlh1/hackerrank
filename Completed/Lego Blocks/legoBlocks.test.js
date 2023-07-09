const legoBlocks = require('./legoBlocks')

describe("Testing legoBlocks", () => {
  test("legoBlocks() should return 9 for the input 2, 3", () => {
    let test = legoBlocks(2, 3)
    let result = 9n
    expect(test).toEqual(result);
  })
  test("legoBlocks() should return the correct responses for the given input", () => {
    let testArr = [[2,2],[3,2],[4,4],[4,5],[4,6],[4,7],[5,4],[6,4],[7,4]]
    let resultArr = [3n,7n,3375n,35714n,447902n,5562914n,29791n,250047n,2048383n]
    for (let i = 0; i < testArr.length; i++) {
      expect(legoBlocks(testArr[i][0], testArr[i][1])).toBe(resultArr[i])
    }
  })
})