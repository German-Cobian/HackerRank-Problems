// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// a = [1,2,3,4,3,2,1]

// The unique element is 4.

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// * int a[n]: an array of integers

// Returns

// * int: the element that occurs only once

// Input Format

// The first line contains a single integer, n, the number of integers in the array.
// The second line contains n space-separated integers that describe the values in a.

// Constraints

// * 1 <= n < 100
// * It is guaranteed that  is an odd number and that there is one unique element.
// * 0 <= a[i] <= 100, where 0 <= i < n.

function lonelyinteger(a) {
  // Write your code here
  for(let i=0; i <=a.length-1; i++) {
  let count = 0;
  
      for(let k=0; k <=a.length-1; k++) {
          if(a[i]===a[k]) {
              count += 1
          } 
      }
  if (count + (a.length-2) != a.length) {
  let result = a[i]
  return result
  }
}
}