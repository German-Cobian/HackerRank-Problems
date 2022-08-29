//Objective

// To expand our knowledge of strings, combining it with what we have already learned about loops. In
// HackerRank this challenge is actually called "Let's Review".

// Task

// Given a string, S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed 
// characters as 2 space-separated strings on a single line (see the Sample below for more detail).

// Note: 0 is considered to be an even index.

//Example
// s = adbecf
//Print abc def

// Input Format

// The first line contains an integer, T (the number of test cases).
// Each line i of the T subsequent lines contain a string, S.

// Constraints
// 1 <= T <=10
// 2 <= length of S <= 10000

// Output Format

// For each String Sj (where 0 <= j <= t-1), print Sj's even-indexed characters, followed by a space, followed
// by Sj's odd-indexed characters.

// Sample Input

// 2
// Hacker
// Rank

// Sample Output

// Hce akr
// Rn ak

function processData(input) {
  //Enter your code here
  var myArray = input.split("\n"); //Splitting string between each newline into myArray 

  //values.
  var evenChar = "";
  var oddChar = "";

  for (var i = 1; i < myArray.length; i++){
      for (var j = 0; j < myArray[i].length; j++) {
          if (j % 2 == 0) {
              evenChar += myArray[i][j]; //Therefore, add value to evenChar string.
          } else {
              oddChar += myArray[i][j]; //If odd, add value to oddChar string.
          }
      }
      console.log(evenChar + " " + oddChar);
      evenChar = "";
      oddChar = "";
  }
}