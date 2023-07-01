/*
Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their money.

Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

Example. m=6 cost=[1,3,4,5,6]

The two flavors that cost 1 and 5 meet the criteria. Using -based indexing, they are at indices 1 and 4.
*/

function icecreamParlor(m, arr) {
  // Write your code here
  let map=new Map();
  for(let i=0;i<arr.length;i++){
    debugger
      let i2=m-arr[i];
      if(map.get(i2))
          return [map.get(i2),i+1].sort((a,b)=>a-b);
      else
          map.set(arr[i],i+1)
  }
}

module.exports = icecreamParlor

console.log(icecreamParlor(4, [ 2, 2, 4, 3 ]))