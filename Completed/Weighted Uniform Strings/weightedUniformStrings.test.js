const weightedUniformStrings = require('./weightedUniformStrings')

describe("Testing weightedUniformStrings", () => {
  test("weightedUniformStrings() should return ['Yes', 'No', 'No', 'Yes', 'No'] for the input 'abbcccdddd',[1,7,5,4,15]", () => {
    let test = weightedUniformStrings('abbcccdddd',[1,7,5,4,15])
    let result = ['Yes', 'No', 'No', 'Yes', 'No']
    expect(test).toEqual(result);
  })
  test("weightedUniformStrings() should return ['Yes','Yes','Yes','Yes','No','No'] for the input 'abccddde',[1,3,12,5,9,10]", () => {
    let test  = weightedUniformStrings('abccddde',[1,3,12,5,9,10])
    let result = ['Yes','Yes','Yes','Yes','No','No']
    expect(test).toEqual(result);
  })
  test("weightedUniformStrings() should return ['Yes','No','Yes','Yes','No'] for the input 'aaabbbbcccddd',[9,7,8,12,5]", () => {
    let test  = weightedUniformStrings('aaabbbbcccddd',[9,7,8,12,5])
    let result = ['Yes','No','Yes','Yes','No']
    expect(test).toEqual(result);
  })
})