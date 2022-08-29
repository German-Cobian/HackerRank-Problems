// In this challenge, the task is to debug the existing code to successfully execute all provided test files.

// ***

// Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.

// To know more about XOR Click Here

// Debug the given function strings_xor to find the XOR of the two given strings appropriately.

// Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.

// To restore the original code, click on the icon to the right of the language selector.

// Input Format

// The input consists of two lines. The first line of the input contains the first string, s, and the second line 
// contains the second string, t.

// Constraints

// * 1 <= |s| <= 10**4
// * |s| = |t|

// Output Format

// Print the string obtained by the XOR of the two input strings in a single line.

// Sample Input

// 10101
// 00101

// Sample Output

// 10000

string strings_xor(string s, string t) {

  string res = "";
  
  for(int i = 0; i < s.size(); i++) {
      if(s[i] == t[i])
          res += '0';
      else
          res += '1';
  }

  return res;
}
