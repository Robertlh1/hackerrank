const superReducedString = require('./superReducedString')

describe("Testing superReducedString", () => {
  test("superReducedString() should return 'abd' for the input 'aaabccddd'", () => {
    let test = superReducedString('aaabccddd')
    let result = 'abd'
    expect(test).toEqual(result);
  })
  test("superReducedString() should return 'Empty String' for the input 'aa'", () => {
    let test  = superReducedString('aa')
    let result = 'Empty String'
    expect(test).toEqual(result);
  })
  test("superReducedString() should return 'Empty String' for the input 'baab'", () => {
    let test  = superReducedString('baab')
    let result = 'Empty String'
    expect(test).toEqual(result);
  })
})