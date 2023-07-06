const alternate = require('./alternate')

describe("Testing alternate", () => {
  test("alternate() should return 3 for the input 'abaacdabd'", () => {
    let test = alternate('abaacdabd')
    let result = 4
    expect(test).toBe(result);
  })
  test("alternate() should return 5 for the input 'beabeefeab'", () => {
    let test  = alternate('beabeefeab')
    let result = 5
    expect(test).toBe(result);
  })
  test("alternate() should return 8 for the input 'asdcbsdcagfsdbgdfanfghbsfdab'", () => {
    let test  = alternate('asdcbsdcagfsdbgdfanfghbsfdab')
    let result = 8
    expect(test).toBe(result);
  })
  test("alternate() should return 0 for the input 'asvkugfiugsalddlasguifgukvsa'", () => {
    let test  = alternate('asvkugfiugsalddlasguifgukvsa')
    let result = 0
    expect(test).toBe(result);
  })
})