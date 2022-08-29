// Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to 
// make the string a palindrome. There may be more than one solution, but any will do. If the word is already a palindrome 
// or there is no solution, return -1. Otherwise, return the index of a character to remove.

// Example

// s= 'bcbc'

// Either remove 'b' at index 0 or 'c' at index 3.

// Function Description

// Complete the palindromeIndex function in the editor below.

// palindromeIndex has the following parameter(s):

// * string s: a string to analyze

// Returns

// int: the index of the character to remove or -1

// Input Format

// The first line contains an integer q, the number of queries.
// Each of the next q lines contains a query string s.

// Constraints

// * 1 <= q <= 20
// * 1 <= length of s <= 10**5 + 5
// * All characters are in the range ascii[a-z].

// Sample Input

// STDIN   Function
// -----   --------
// 3       q = 3
// aaab    s = 'aaab' (first query)
// baa     s = 'baa'  (second query)
// aaa     s = 'aaa'  (third query)

//Sample Output

// 3
// 0
// -1


function palindromeIndex(s) {

  let i = 0;
  let j =s.length-1;
  
  while(j>i) {
      if (s[i]!= s[j]) {
          if(s[i+1] == s[j] && s[i+2] == s[j-1]) {
              return i;
          } else if(s[j-1] == s[i] && s [j-2] == s[i+1]) {
              return j;
          }
      }
      i++;
      j--;
  }
  return -1
}
  
  