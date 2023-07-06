/*
Chief's bot is playing an old DOS based game. There is a row of buildings of different heights arranged at each index along a number line. The bot starts at building 0 and at a height of 0. You must determine the minimum energy his bot needs at the start so that he can jump to the top of each building without his energy going below zero.

Units of height relate directly to units of energy. The bot's energy level is calculated as follows:

If the bot's botEnergy is less than the height of the building, his botEnergy = botEnergy - (height - botEnergy)
If the bot's botEnergy is greater than the height of the building, his botEnergy = botEnergy + (botEnergy - height)
Example
arr = [2,3,4,3,2]
Starting with botEnergy = 4, we get the following table:

    botEnergy   height  delta
    4               2       +2
    6               3       +3
    9               4       +5
    14              3       +11
    25              2       +23
    48
That allows the bot to complete the course, but may not be the minimum starting value. The minimum starting botEnergy in this case is 3.
*/

function chiefHopper(arr) {
  let minEnergy = 0, botEnergy = 1
  while (true) {
    minEnergy = botEnergy
    for (let height of arr) {
      if (height > botEnergy) botEnergy = botEnergy - (height - botEnergy)
      else if (botEnergy > height) botEnergy = botEnergy + (botEnergy - height)
      if (botEnergy < 0) break
    }
    if (botEnergy >= 0) return minEnergy
    botEnergy = minEnergy + 1
  }
}

module.exports = chiefHopper