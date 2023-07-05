/*
Given an amount and the denominations of coins available, determine how many ways change can be made for amount. There is a limitless supply of each coin type.

Example
n = 3
c = [8,3,1,2]
There are 3 ways to make change for n = 3: {1,1,1}, {1,2}, and {3}.
*/

function getWays(n, c) {
  let results = {}
  // Sort the available coins by value and add each to an object as the key to an array.
  c = c.sort((a,b)=>a-b)
  for (let coin of c) results[coin] = new Array(n+1)

  // Iterate through that array, starting from the lowest denomination.
  for (let i = 0; i < c.length; i++) {
    // currCoin is the current denomination, currChange is the array of subproblems.
    // lastChange is the previous denominations array, and the answer for 0 is always 1.
    let currCoin = c[i], currChange = results[c[i]], lastChange = results[c[i-1]]
    currChange[0] = 1

    // Iterate through the array of subproblems.
    for (let j = 1; j < currChange.length; j++) {
      // j is the amount of change required, from 0 to the final problem of n.
      // To set values for the lowest denomination, see if it's evenly divisible by j.
      // If so, set the solutions to 1 otherwise, 0.
      if (i === 0) {
        if (Number.isInteger(j / c[i])) currChange[j] = 1
        else currChange[j] = 0
      } else {
        // Afterwards, if the current denomination is higher than J we can take the
        // previous result and skip calculating.
        if (currCoin > j) currChange[j] = lastChange[j]
        else {
          // Otherwise, take the value from j - the current denomination
          let remainder = currChange[j - currCoin]
          // And add that to the previous denomination
          currChange[j] = lastChange[j] + remainder
        }
      }
    }
  }

  // Return the result at the last index of the last array
  return results[c[c.length - 1]][results[c[c.length-1]].length-1]
}

module.exports = getWays