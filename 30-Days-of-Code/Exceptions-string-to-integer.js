// Objective

// To get started with Exceptions by learning how to parse an integer from a string and print a custom error message. 

// Task

// Read a string, S, and print its integer value; if S cannot be converted to an integer, print "Bad String".

// Note: You must use the String-to-Integer and exception handling constructs built into your submission language.
// If you attempt to use loops/conditional statements, you will get a 0 score.

// Input Format

// A single string, S.

// Constraints

// * 1 <= |S| <= 6, where |S| is the length of string S.
// * S is composed of either lowercase letters (a-z) or decimal digits (0-9).

// Output Format

// Print the parsed integer value of S, or Bad String if S cannot be converted to an integer.


// Sample Input 0

// 3

//Sample Output 0

// 3

// Sample Input 1

// za

// Sample Output 1

// Bad String

/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *     
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

function main() {
  const S = readLine();

  try {
      let ans = parseInt(S) || ans.toString();
      console.log(parseInt(S));
  } catch(err) {
      console.log("Bad String")
  }
}
