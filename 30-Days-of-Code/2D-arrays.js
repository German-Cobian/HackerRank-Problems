// Objective

// To building on our knowledge of arrays by adding another dimension.

// Context

// Given a 6x6 2D Array, A:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical 
// representation:

// a b c
//   d
// e f g
// There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.

// Task

// Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

// Example

// In the array shown above, the maximum hourglass sum is 7 for the hourglass in the top left corner.

// Input Format

// There are 6 lines of input, where each line contains 6 space-separated integers that describe the 2D Array A.

// Constraints

// * -9 <= A[i][j] <= 9
// * 0 <= i, j <= 5

// Output Format

// Print the maximum hourglass sum in A.

// Sample Input

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// Sample Output

// 19


function hourglassSum(arr) {

  let maxSum = 0;

  for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
          let sum = 
              arr[row][col] +
              arr[row][col + 1] +
              arr[row][col + 2] +
              arr[row + 1][col + 1] +
              arr[row + 2][col] +
              arr[row + 2][col + 1] +
              arr[row + 2][col + 2];

          if (sum > maxSum) {
              maxSum = sum;
          }
      }  
  }
 return maxSum;
}
