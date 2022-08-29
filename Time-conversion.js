// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the
// input time in 24 hour format.

// timeConversion has the following parameter(s):

// * string s: a time in 12 hour format

// Returns

// * string: the time in 24 hour format

// Input Format

// A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

// Constraints

// * All input times are valid

// Sample Input 0

// 07:05:45PM

// Sample Output 0

// 19:05:45

// *** Two solutions ***

function timeConversion(s) {
 
  let late = s.includes("PM");

  if (!late) {
      s = s.split("AM");
      s = s[0].split(":")
      if (s[0] == "12")  s[0] = "00";
      return s.join(":");
  } else {
      s = s.split("PM");
      s = s[0].split(":");
      if (s[0] != 12)  s[0] = (parseInt(s[0]) + 12).toString();
      return s.join(":");
  }
}

function timeConversion(s) {
  // Write your code here
  let arr = Array.from(s)
  if((arr[0]==='1')&&(arr[1]==='2')&&(arr[8]==='A')) {
      arr.splice(0,1,'0');
      arr.splice(1,1,'0');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='1')&&(arr[8]==='P')) {
      arr.splice(0,1,'1');
      arr.splice(1,1,'3');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='2')&&(arr[8]==='P')) {
      arr.splice(0,1,'1');
      arr.splice(1,1,'4');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='3')&&(arr[8]==='P')) {
      arr.splice(0,1,'1');
      arr.splice(1,1,'5');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='4')&&(arr[8]==='P')) {
      arr.splice(0,1,'1');
      arr.splice(1,1,'6');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='5')&&(arr[8]==='P')) {
      arr.splice(0,1,'1');
      arr.splice(1,1,'7');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='6')&&(arr[8]==='P')) {
      arr.splice(0,1,'1');
      arr.splice(1,1,'8');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='7')&&(arr[8]==='P')) {
      arr.splice(0,1,'1');
      arr.splice(1,1,'9');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='8')&&(arr[8]==='P')) {
      arr.splice(0,1,'2');
      arr.splice(1,1,'0');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='0')&&(arr[1]==='9')&&(arr[8]==='P')) {
      arr.splice(0,1,'2');
      arr.splice(1,1,'1');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='1')&&(arr[1]==='0')&&(arr[8]==='P')) {
      arr.splice(0,1,'2');
      arr.splice(1,1,'2');
      arr.pop();
      arr.pop()
  } else if((arr[0]==='1')&&(arr[1]==='1')&&(arr[8]==='P')) {
      arr.splice(0,1,'2');
      arr.splice(1,1,'3');
      arr.pop();
      arr.pop()
  } else {
      arr.pop()
      arr.pop()
  }
let result = arr.join('')
return result
}