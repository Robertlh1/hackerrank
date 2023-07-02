const isBalanced = require('./isBalanced')

describe("Testing isBalanced", () => {
  test("isBalanced() should return 'YES', 'NO', 'YES' for the provided brackets", () => {
    let test = ['{[()]}', '{[(])}', '{{[[(())]]}}']
    let expected = ['YES', 'NO', 'YES']
    let result = []
    for (let i = 0; i < test.length; i++) {
      result.push(isBalanced(test[i]))
    }
    expect(result).toEqual(expected);
  })
  test("isBalanced() should return 'YES', 'NO' for the provided brackets", () => {
    let test = ['{{([])}}', '{{)[](}}']
    let expected = ['YES', 'NO']
    let result = []
    for (let i = 0; i < test.length; i++) {
      result.push(isBalanced(test[i]))
    }
    expect(result).toEqual(expected);
  })
  test("isBalanced() should return 'YES', 'NO', 'YES' for the provided brackets", () => {
    let test = ['{(([])[])[]}', '{(([])[])[]]}', '{(([])[])[]}[]']
    let expected = ['YES', 'NO', 'YES']
    let result = []
    for (let i = 0; i < test.length; i++) {
      result.push(isBalanced(test[i]))
    }
    expect(result).toEqual(expected);
  })
})