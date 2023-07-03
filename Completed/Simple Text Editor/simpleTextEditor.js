/*
Implement a simple text editor. The editor initially contains an empty string, . Perform  operations of the following  types:

append(W) - Append string W to the end of S.
delete(k) - Delete the last k characters of S.
print(k) - Print the kth character of S.
undo() - Undo the last (not previously undone) operation of type  or , reverting  to the state it was in prior to that operation.
*/

function processData(input) {
  //Enter your code here
  input = input.split('\n')
  let s = '', last = ['']
  for (let i = 1; i < input.length; i ++) {
    let curr = input[i].split(' ')
    if (curr[0] == 1) {s += curr[1]; last.push(s)}
    if (curr[0] == 2) {s = s.slice(0, s.length - curr[1]); last.push(s)}
    if (curr[0] == 3) console.log(s[curr[1] - 1])
    if (curr[0] == 4) {last.pop(); s = last[last.length - 1]}
  }
}

module.exports = processData