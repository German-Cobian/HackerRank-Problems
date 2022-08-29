// Objective

// To learn about the Array data structure.

// Task

// Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

// Example

// A = [1,2,3,4]

// Print 4 3 2 1. Each integer is separated by one space.

// Input Format

// The first line contains an integer, N (the size of our array).
// The second line contains N space-separated integers that describe array A's elements.

// Constraints

// i <= N <= 1000
// 1 <= A[i] <= 10000, where A[i] is the i**th integer in the array.

// Output Format

// Print the elements of array A in reverse order as a single line of space-separated numbers.


// Sample Input

// 4
// 1 4 3 2

// Sample Output

// 2 3 4 1


function main() {
  const n = parseInt(readLine(), 10);
  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
      
  console.log(arr.reverse().join(' '));
}