/*
Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.

Example
s = 'abaacdabd'

Delete a, to leave bcdbd. Now, remove the character c to leave the valid string bdbd with a length of 4. Removing either b or d at any point would not result in a valid string. Return 4.

Given a string s, convert it to the longest possible string t made up only of alternating characters. Return the length of string t. If no string t can be formed, return 0.
*/

function alternate(s) {
  let chars = {}, max = 0
  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]]) chars[s[i]] ++
    if (chars[s[i]] === undefined) chars[s[i]] = 1
    if (s[i] === s[i-1]) chars[s[i]] = false
  }
  let char = Object.keys(chars)
  for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < char.length; j++) {
      if (j === i) continue
      let a = char[i], b = char[j], currS = ''
      for (let k = 0; k < s.length; k++) {
        if (s[k] === a || s[k] === b) currS += s[k]
      }
      for (let l = 1; l < currS.length; l++) {
        if (currS[l-1] === currS[l]) currS = ''
      }
      max = Math.max(currS.length, max)
    }
  }
  return max
}

module.exports = alternate