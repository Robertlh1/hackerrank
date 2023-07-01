const processData = require('./processData')

describe("Testing processData", () => {
  test("processData() should console.log 14 twice for the input '10\n1 42\\n2\\n1 14\\n3\\n1 28\\n3\\n1 60\\n1 78\\n2\\n2'", () => {
    let test = "10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2"
    let consoleSpy = jest.spyOn(console, 'log')
    processData(test)
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '14')
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '14')
  })
})