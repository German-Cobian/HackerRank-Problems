// Objective

// To delve into Inheritance.

// Task

// You are given two classes, Person and Student, where Person is the base class and Student is the derived 
// class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe 
// that Student inherits all the properties of Person.

// Complete the Student class by writing the following:

// A Student class constructor, which has  parameters:
// A string, firstName.
// A string, lastName.
// An integer, idNumber.
// An integer array (or vector) of test scores, scores.
// A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:

// Letter  Average (a)
//   O     90 <= a <= 100
//   E     80 <= a <= 90
//   A     70 <= a <= 80
//   P     55 <= a <= 70
//   D     40 <= a <= 55
//   T     a <= 40

// Input Format

// The locked stub code in the editor reads the input and calls the Student class constructor with the necessary
// arguments. It also calls the calculate method which takes no arguments.

// The first line contains firstName, lastName, and idNumber, separated by a space. The second line contains the 
// number of test scores. The third line of space-separated integers describes scores.

// Constraints

// 1 <= length of first Name, length of last Name <= 10
// length of idNumber = 7
// 0 <= score <= 100

// Output Format

// Output is handled by the locked stub code. Your output will be correct if your Student class constructor 
// and calculate() method are properly implemented.

// Sample Input

// Heraldo Memelli 8135627
// 2
// 100 80

// Sample Output

//  Name: Memelli, Heraldo
//  ID: 8135627
//  Grade: O


class Student extends Person {
     
  /*	
  *   Class Constructor
  *   
  *   @param firstName - A string denoting the Person's first name.
  *   @param lastName - A string denoting the Person's last name.
  *   @param id - An integer denoting the Person's ID number.
  *   @param scores - An array of integers denoting the Person's test scores.
  */
  // Write your constructor here.

constructor(firstName, lastName, id, scores) {
      super(firstName, lastName, id)
      this.scores = scores
  }
/*    
  *   Method Name: calculate
  *   @return A character denoting the grade.
  */
  // Write your method here

 calculate() {
      let avg_score = this.scores.reduce(getSum) / this.scores.length
      if (avg_score >= 90) {
          return 'O'
      } else if (avg_score >= 80) {
          return 'E'
      } else if (avg_score >= 70) {
          return 'A'
      } else if (avg_score >= 55) {
          return 'P'
      } else if (avg_score >= 40) {
          return 'D'
      } else {
          return 'T'
      } 
  }
}
function getSum(total, num) {
  return total + num
}