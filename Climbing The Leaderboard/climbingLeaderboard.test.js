const climbingLeaderboard = require('./climbingLeaderboard')

describe("Testing climbingLeaderboard", () => {
  test("climbingLeaderboard() should return [6,5,4,2,1] for the input [100,90,90,80,75,60],[50,65,77,90,102]", () => {
    let test = climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102])
    let result = [6,5,4,2,1]
    expect(test).toEqual(result);
  })
  test("climbingLeaderboard() should return [6,4,2,1] for the input [100,100,50,40,40,20,10],[5,25,50,120]", () => {
    let test  = climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120])
    let result = [6,4,2,1]
    expect(test).toEqual(result);
  })
})