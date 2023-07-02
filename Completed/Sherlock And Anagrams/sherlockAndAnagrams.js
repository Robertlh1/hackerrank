/*
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

Example
s = mom

The list of all anagrammatic pairs is [m,m], [mo,om] at positions [[0],[2]], [[0,1],[1,2]] respectively.
*/

function sherlockAndAnagrams(s) {
  let result = 0; ana = {}
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let gram = s.slice(i,j).split('').sort().join('')
      if (ana[gram]) {result += ana[gram];ana[gram] ++}
      else ana[gram] = 1
    }
  }
  return result
}

module.exports = sherlockAndAnagrams