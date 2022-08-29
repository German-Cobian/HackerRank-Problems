// In this challenge, the task is to debug the existing code to successfully execute all provided test files.

// Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive).
// To see if a date is lucky,

// * Firstly, sequentially concatinate the date, month and year, into a new integer  erasing the leading zeroes.
// * Now if x is divisible by either 4 or 7, then we call the date a lucky date.

// For example, let's take the date "02-08-2024". After concatinating the day, month and year, we get x = 2082024.
// As x is divisible by 4 so the date "02-08-2024" is called a lucky date.

// Debug the given function findPrimeDates and/or other lines of code, to find the correct lucky dates from the given input.

// Note: You can modify at most five lines in the given code and you cannot add or remove lines to the code.

// To restore the original code, click on the icon to the right of the language selector.

// Input Format

// The only line of the input contains two strings u and v denoting the two dates following the format dd-mm-yyyy.
// Consider, d is the day number, m is the month number and y is the year number.

// Note: Here m = 01 means January, m = 02 means February, m = 03 means March and so on and all the dates follow the standard structure of English calender including the leap year.

// Constraints

// 1 <= d1, d2 <= 31
// 1 <= m1, m2 <= 12
// 1000 <= y1, y2 <= 9999

// Output Format

// For each test cases, print a single integer the number of lucky dates between u and v in a single line.

int findLuckyDates(int d1, int m1, int y1, int d2, int m2, int y2) {
  storeMonth();

  int result = 0;

  while(true) {
      int x = d1;
      x = x * 100 + m1;
      x = x * 10000 + y1;
      if(x % 4 == 0 || x % 7 == 0) {
          result = result + 1;
      }
      if(d1 == d2 && m1 == m2 && y1 == y2) {
          break;
      }
      updateLeapYear(y1);
      d1 = d1 + 1;
      if(d1 > month[m1]) {
          m1 = m1 + 1;
          d1 = 1;
          if(m1 > 12) {
              y1 =  y1 + 1;
              m1 = 1; 
          }
      }
  }
  return result;
}