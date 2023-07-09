/*
A weighted string is a string of lowercase English letters where each letter has a weight. Character weights are 1 to 26 from a to z as shown below:

a = 1 ... z = 26

The weight of a string is the sum of the weights of its characters. For example:
apple 1 + 16 + 16 + 12 + 5 = 50
hack  8 + 1 + 3 + 11 = 23
watch 23 + 1 + 20 + 3 + 8 = 53
ccccc 3 + 3 + 3 + 3 + 3 = 15
aaa   1 + 1 + 1 = 3
zzzz  26 + 26 + 26 + 26 = 104

A uniform string consists of a single character repeated zero or more times. For example, ccc and a are uniform strings, but bcb and cd are not.
Given a string, s, let U be the set of weights for all possible uniform contiguous substrings of string s. There will be n queries to answer where each query consists of a single integer. Create a return array where for each query, the value is Yes if query[i] is a set of U. Otherwise, append No.

Example
s = 'abbcccdddd'
queries = [1,7,5,4,15].

Working from left to right, weights that exist are:

string  weight
a       1
b       2
bb      4
c       3
cc      6
ccc     9
d       4
dd      8
ddd     12
dddd    16
Now for each value in , see if it exists in the possible string weights. The return array is ['Yes', 'No', 'No', 'Yes', 'No'].
*/

function weightedUniformStrings(s, queries) {
  let codex = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
  let weights = {}, result = []

  for (let i = 0; i < s.length; i++) {
    let currWeight = 0
    currWeight += codex[s[i]]
    weights[currWeight] = true
    let j = i + 1
    while (s[i] === s[j]) {
      currWeight += codex[s[i]]
      weights[currWeight] = true
      j++
    }
    i = j-1
  }

  for (let k = 0; k < queries.length; k++) {
    weights[queries[k]] ? result.push('Yes') : result.push('No')
  }

  return result
}

module.exports = weightedUniformStrings
console.log(weightedUniformStrings('abccddde',[1,3,12,5,9,10]))