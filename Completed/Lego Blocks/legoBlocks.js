/*
You have an infinite number of 4 types of lego blocks of sizes given as (depth x height x width):

d	h	w
1	1	1
1	1	2
1	1	3
1	1	4
Using these blocks, you want to make a wall of height n and width m. Features of the wall are:

- The wall should not have any holes in it.
- The wall you build should be one solid structure, so there should not be a straight vertical break across all rows of bricks.
- The bricks must be laid horizontally.

How many ways can the wall be built?

Example
n = 2
m = 3

The height is 2 and the width is 3. Here are some configurations:
Good Layouts:     Bad Layouts:
1|2 | 2|1         1|1|1 | 1|2
3   | 1|2         1|2   | 1|2

4   | 1|1|1
4   | 3

These are not all of the valid permutations. There are 9 valid permutations in all.
*/

function mods(n) {
  let modulo = BigInt((10 ** 9) + 7)
  return n < 0 ? (n % modulo) + modulo : n % modulo
}

function legoBlocks(n, m) {
  let row = [1n], block = [1n], solid = [1n]
  for (let i = 1; i <= m; i++) {
    let solidSum = BigInt(0)
    for (let j = 1; j < i; j++) {
      solidSum += mods(solid[j] * block[i-j])
    }
    let rowSum = BigInt(0)
    row.slice(-4).forEach((a)=>rowSum += a)
    row.push(mods(rowSum))
    block.push(mods(row[i] ** BigInt(n)))
    solid.push(mods(block[i] - solidSum))
  }
  return mods(solid[m])
}

module.exports = legoBlocks