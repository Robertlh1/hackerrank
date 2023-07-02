/*
Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

Example.
s = 'aab'
aab shortens to b in one operation: remove the adjacent a characters.

s = 'abba'
Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.
*/

function superReducedString(s) {
  // Write your code here
  let cont = s.length > 1
  while (cont) {
    cont = false
    for (let i = 1; i < s.length; i++) {
      if (s[i-1] === s[i]) {s = s.slice(0, i-1) + s.slice(i+1); cont = true}
    }
  }

  return s.length > 0 ? s : 'Empty String'
}

module.exports = superReducedString
console.log(superReducedString('aabb'))