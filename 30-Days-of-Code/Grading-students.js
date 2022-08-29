function gradingStudents(grades) {
  // Write your code here

return grades.map(grade => {

 if ((grade < 38) || ((grade%5) < 3)) {
  return grade;
    } else if (grade%5 == 3) {
      return grade+2;
    } else if (grade%5 == 4) {
      return grade + 1;
    }
  })
}
