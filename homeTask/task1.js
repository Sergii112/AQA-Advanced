const avarageGrade = 59.9999;
let studentSuccess;
if (avarageGrade < 60) {
  studentSuccess = 'Unsatisfactorily';
} else if (avarageGrade >= 60 && avarageGrade <= 70) {
  studentSuccess = 'Satisfactorily';
} else if (avarageGrade >= 71 && avarageGrade <= 80) {
  studentSuccess = 'Fine';
} else if (avarageGrade >= 81 && avarageGrade <= 90) {
  studentSuccess = 'Very Good';
} else if (avarageGrade >= 91 && avarageGrade <= 100) {
  studentSuccess = 'Perfectly';
}
console.log(studentSuccess);
