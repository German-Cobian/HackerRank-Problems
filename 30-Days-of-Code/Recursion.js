// Objective

// To learn about an algorithmic concept called recursion. Check out the Tutorial tab for learning materials 
// and an instructional video.

// Recursive Method for Calculating Factorial

// factorial(N) = { 1 / N * factorial(N-1)     N <= 1 otherwise

// Function Description

// Complete the factorial function in the editor below. Be sure to use recursion.

// factorial has the following parameter:

// int n: an integer

// Returns

// int: the factorial of n
// Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, 
// you will get a score of 0.

// Input Format

// A single integer, n (the argument to pass to factorial).

// Constraints

// 2 <= n <= 12
// Your submission must contain a recursive function named factorial.

// Sample Input

// 3

// Sample Output

// 6


function factorial(n) {
  if (n <= 1) {
      return 1;
  } else {
      return n * factorial(n -1);
  }
}