/*
Your algorithms have become so good at predicting the market that you now know what the share price of Wooden Orange Toothpicks Inc. (WOT) will be for the next number of days.

Each day, you can either buy one share of WOT, sell any number of shares of WOT that you own, or not make any transaction at all. What is the maximum profit you can obtain with an optimum trading strategy?

Example
prices = [1,2]
Buy one share day one, and sell it day two for a profit of 1. Return 1.
prices = [2,1]
No profit can be made so you do not buy or sell stock those days. Return 0.
*/

function stockmax(prices) {
  // Write your code here
  let maxProfit = 0, totalProfit = 0
  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > maxProfit) maxProfit = prices[i]
    else totalProfit += maxProfit - prices[i]
  }
  return totalProfit
}

module.exports = stockmax