/*
*/

function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length; i++) {
    let second = arr.indexOf(m - arr[i], i+1)
    if (second >= 0) return [i+1, second+1]
  }
}

module.exports = icecreamParlor