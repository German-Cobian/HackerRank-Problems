// Objective

// To work with binary numbers.

// Task

// Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting 
// the maximum number of consecutive 1's in n's binary representation. When working with different bases, it 
// is common to show the base as a subscript.

// Example

// The binary representation of 125 in base-10 is 1111101 in base-2. In base-10, there are 5 and 1 consecutive
// ones in two groups. Print the maximum, 5.

// Input Format

// A single integer, n.

// Constraints

// * 1 <+ n <= 10

// Output Format

// Print a single base-10 integer that denotes the maximum number of consecutive 1's in the binary
// representation of n.


// Sample Input 1

// 5

// Sample Output 1

// 1

// Sample Input 2

// 13

// Sample Output 2

// 2

function main() {
  const n = parseInt(readLine(), 10);
  let arr = n.toString(2);
  let count = 0;
  let maxOne = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
          count++;
      } else {
          count = 0;
      }

      if (count > maxOne) {
          maxOne = count;
      }
  }
   console.log(maxOne);
}