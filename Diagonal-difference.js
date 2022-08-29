// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 9 8 9 

// The left-to-right diagonal 1+5+9 = 15 . The right to left diagonal 3+5+9 = 17. Their absolute difference is
// |15-17| = 2 .

// Function description

// Complete the diagonalDifference function in the editor below.
// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers

// Return

// int: the absolute diagonal difference

// Input Format

// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

// Constraints

// -100 <= arr[i][j] <= 100

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2  4
// 4  5  6
// 10 8 -12

// Sample Output

// 15


function diagonalDifference(arr) {
  // Write your code here
  let sumMain = 0;
  let sumCounter = 0;

  for (let i = 0; i < arr.length; i++) {
              sumMain += arr[i][i];
              sumCounter += arr[i][arr.length-1-i];
          }
  const absoluteDifDiag = Math.abs(sumMain - sumCounter);
  return (absoluteDifDiag);   
}

// Or

function diagonalDifference(arr) {
  // Write your code here
  let diag1 = 0;
  let diag2 = 0;
  
  for(let i = 0; i <= arr.length-1; i++) {
      for(let j = 0; j <= arr.length-1; j++) {
          if(i === j) {
          diag1 += arr[i][j]
          }
      }
  }
  for(let j=(arr.length-1); j >= 0; j--) {
      for(let i=0; i <= arr.length-1; i++) {
          if(i === Math.abs(j-(arr.length-1))) {
          diag2 += arr[i][j]
          }
      }
  }
  let difference = Math.abs(diag1 - diag2)
  return difference
}