// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly 
// four of the five integers. Then print the respective minimum and maximum values as a single line of two 
// space-separated long integers.

// Example

// arr = [1,3,5,7,9]

// The minimum sum is 1+3+5+7+9 = 16  and the maximum sum is 3+5+7+9 = 24. The function prints
// 16 24

// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of 5 integers

// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

// Input Format

// A single line of five space-separated integers.

// Constraints

// 1 <= arr[i] <= 10**9

// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be 
// calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5

// Sample Output

// 10 14

// *** Two answers ***


function miniMaxSum(arr) {
  const n = arr.length;
  var sum = 0;
  
      // Getting sum of numbers
      var sum = arr.reduce(function(a, b){
          return a + b;
      }, 0);
      
      for (var i = 0; i < n; i++) {
          var partialSum = sum - arr[i];
          arr.splice(i, 1, partialSum);
      }
      var min = Math.min(...arr);
      var max = Math.max(...arr);
      console.log(min + " " + max);
}

function miniMaxSum(arr) {
    // Write your code here
    let arrTotal = 0;
    let sumsArray = [];
    
    for(let i = 0; i <= arr.length-1; i++) {
        arrTotal += arr[i];
    }
    for(let j = 0; j <= arr.length-1; j++) {
        let partSum = arrTotal-arr[j]
        sumsArray.push(partSum)
    }
    sumsArray.sort(function(a, b){return a-b});
    console.log(sumsArray[0], sumsArray[4])
}

