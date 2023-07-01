const icecreamParlor = require('./icecreamParlor')

describe("Testing icecreamParlor", () => {
  test("icecreamParlor() should return [1,4] for the input 6, [1,3,4,5,6]", () => {
    let test = icecreamParlor(6, [1,3,4,5,6])
    let result = [1,4]
    expect(test).toEqual(result);
  })
  test("icecreamParlor() should return [2,4] for the input 4, [1,4,5,3,2]", () => {
    let test  = icecreamParlor(4, [1,4,5,3,2 ])
    let result = [1,4]
    expect(test).toEqual(result);
  })
  test("icecreamParlor() should return [2,4] for the input 9, [1,3,4,6,7,9]", () => {
    let test  = icecreamParlor(9, [1,3,4,6,7,9])
    let result = [2,4]
    expect(test).toEqual(result);
  })
})