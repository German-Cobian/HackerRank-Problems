// There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and 
// print the number of letter a's in the first n letters of the infinite string.

// Example

// s = 'abcac'

// The substring we consider is 'abcac', the first 10 characters of the infinite string. There are 4 occurrences of a in the 
// substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

//Returns

// * int: the frequency of a in the substring

// Input Format

// The first line contains a single string, s.
// 
// The second line contains an integer, n.

// Constraints

// * 1 <= |s| <= 100
// * 1 <= n <= 10**12
// For 25% of the test cases, <= n <= 10**6

// Sample Input

// Sample Input 0

// aba
// 10

// Sample Output 0

// 7


function repeatedString(s, n) {
    
  const stringlong = s.length;
  const repeated = Math.floor(n/stringlong);
  const remaining = n-(stringlong*repeated);
  let result;
  let count = 0;
  let additional = 0;
  
  for(let i=0; i<stringlong; i++) {
      if(s.charAt(i) == "a") {
          ++count;
      }
  }
  for(let i=0; i<remaining; i++) {
      if(s.charAt(i) == "a") {
          ++additional;
      }
  }
  result= (repeated*count)+additional;
  return result;
  }