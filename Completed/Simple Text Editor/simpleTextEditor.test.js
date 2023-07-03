const processData = require('./simpleTextEditor')

describe("Testing processData", () => {
  test("processData() should console.log c, y and a for the input ''8\n1 abc\n3 3\n2 3\n1 xy\n3 2\n4\n4\n3 1''", () => {
    let test = '8\n1 abc\n3 3\n2 3\n1 xy\n3 2\n4\n4\n3 1'
    let consoleSpy = jest.spyOn(console, 'log')
    processData(test)
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'c')
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'y')
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 'a')
  })
})