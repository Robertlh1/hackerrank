/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

Example
ranked = [100,90,90,80]
player = [70,80,105]


The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4th, 3rd and 1st. Return [4,3,1].
*/

function climbingLeaderboard(ranked, player) {
  // Write your code here
  let result = [], currRank = 0
  console.log(ranked)
  ranked = [...new Set(ranked)]

  for (let game of player) {
    ranked, currRank = scoreSearch(ranked, game)
    result.push(currRank)
  }

  return result
}

function scoreSearch(ranked, score) {
  let left = 0, right = ranked.length
  if (score > ranked[0]) return ranked.unshift(score), 1
  if (score < ranked[right-1]) return ranked.push(score), right + 1

  while (true) {
    let mid = Math.floor((left + right) / 2)
    if (ranked[mid] === score) return mid + 1
    if (ranked[mid] > score && ranked[mid + 1] < score) {
      return ranked.splice(mid + 1, 0, score), mid + 2
      }
      score > ranked[mid] ? right = mid : left = mid
  }
}

module.exports = climbingLeaderboard

console.log(climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120]))