/*
We define subsequence as any subset of an array. We define a subarray as a contiguous subsequence in an array.

Given an array, find the maximum possible sum among:

1. all nonempty subarrays.
2. all nonempty subsequences.

Print the two values as space-separated integers on one line.
Note that empty subarrays/subsequences should not be considered.

Example
arr = [-1,2,3,-4,5,10]
The maximum subarray sum is comprised of elements at inidices [1 - 5]. Their sum is 2 + 3 + -4 + 5 +10 = 16. The maximum subsequence sum is comprised of elements at indices [1,2,4,5] and their sum is 2 + 3 + 5 + 10.
*/

function maxSubarray(arr) {
  let maxSub = 0, maxSeq = maxSub, currSub = maxSub, allNegative = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {allNegative = false; maxSeq += arr[i]}
    currSub = Math.max(0, currSub + arr[i])
    maxSub = Math.max(maxSub, currSub)
  }
  if (allNegative) {
    arr = arr.sort((a,b)=>b-a)
    return [arr[0],arr[0]]
  }

  return [maxSub,maxSeq]
}

module.exports = maxSubarray