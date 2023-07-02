const sherlockAndAnagrams = require('./sherlockAndAnagrams')

describe("Testing sherlockAndAnagrams", () => {
  test("sherlockAndAnagrams() should return 4 for the input 'abba'", () => {
    let test = sherlockAndAnagrams('abba')
    let result = 4
    expect(test).toEqual(result);
  })
  test("sherlockAndAnagrams() should return 0 for the input 'abcd'", () => {
    let test  = sherlockAndAnagrams('abcd')
    let result = 0
    expect(test).toEqual(result);
  })
  test("sherlockAndAnagrams() should return 3 for the input 'ifailuhkqq'", () => {
    let test  = sherlockAndAnagrams('ifailuhkqq')
    let result = 3
    expect(test).toEqual(result);
  })
  test("sherlockAndAnagrams() should return 10 for the input 'kkkk'", () => {
    let test  = sherlockAndAnagrams('kkkk')
    let result = 10
    expect(test).toEqual(result);
  })
  test("sherlockAndAnagrams() should return 5 for the input 'cdcd'", () => {
    let test  = sherlockAndAnagrams('cdcd')
    let result = 5
    expect(test).toEqual(result);
  })
})