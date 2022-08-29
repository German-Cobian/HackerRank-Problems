// Objective

// In this challenge, we learn about conditional statements.

// Task

//Given an integer, n, perform the following conditional actions:

// If n is odd, print "Weird"
// If n is even and in the inclusive range of 2 to 5, print "Not Weird"
// If n is even and in the inclusive range of 6 to 20, print "Weird"
// If n is even and greater than 20, print "Not Weird"
// Complete the stub code provided in your editor to print whether or not n is weird.

// Input Format

// A single line containing a positive integer, n.

// Constraints

// 1<= n <= 100

// Output Format

// Print "Weird" if the number is weird; otherwise, print "Not Weird".


function main() {
  const n = parseInt(readLine(), 10);
  var ans = "";

      if (n % 2 == 0 && (n >= 2) && (n <= 5)) {
          ans = "Not Weird"; 
          }
          else if ((n % 2 == 0) && (n >= 6) && (n <=20)) {
              ans = "Weird"; 
              }
              else if ((n % 2 == 0) && (n > 20)) {
                  ans = "Not Weird";
                  }
                  else {ans = "Weird";
                  }
                  console.log(ans);
}