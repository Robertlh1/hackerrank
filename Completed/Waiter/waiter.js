/*
You are a waiter at a party. There is a pile of numbered plates. Create an empty answers array. At each iteration, i, remove each plate from the top of the stack in order. Determine if the number on the plate is evenly divisible by the ith prime number. If it is, stack it in pile B. Otherwise, stack it in stack A. Store the values in B from top to bottom in answers. In the next iteration, do the same with the values in stack Ai. Once the required number of iterations is complete, store the remaining values in Ai in answers, again from top to bottom. Return the answers array.

Example
A = [2,3,4,5,6,7]
q = 3
An abbreviated list of primes is [2,3,5,7,11,13]. Stack the plates in reverse order.
A0 = [2,3,4,5,6,7]
Begin iterations. On the first iteration, check if items are divisible by 2.
A1 = [7,5,3]
B1 = [6,4,2]
Move B1 elements to answers.
answers = [2,4,6]
On the second iteration, test if A1 elements are divisible by 3.
A2 = [7,5]
B2 = [3]
Move B2 elmements to answers.
answers = [2,4,6,3]
And on the third iteration, test if A2 elements are divisible by 5.
A3 = [7]
B3 = [5]
Move B3 elmements to answers.
answers = [2,4,6,3,5]
All iterations are complete, so move the remaining elements in A3, from top to bottom, to answers.
answers = [2,4,6,3,5,7]. Return this list.
*/

function waiter(number, q) {
  // Write your code here
  let primes = findPrimeNumbers(number.length)
  let a = [...number], b = [], answers = []
  for (let j = 0; j <= q; j++) {
    if (j === q) {answers = answers.concat(b.reverse(), a.reverse()); break}
    let newA = [], newB = []
    for (let k = a.length - 1; k >= 0; k--) {
        if (a[k] % primes[j] === 0) newB.push(a[k])
        else newA.push(a[k])
    }
    answers = answers.concat(b.reverse())
    a = newA
    b = newB
  }
  return answers
}

function findPrimeNumbers(num) {
  let primeNumbers = [], i = 2
  while (primeNumbers.length < num) {
    if (isPrime(i)) primeNumbers.push(i)
    i++
  }
  return primeNumbers
}

function isPrime (num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}

module.exports = waiter