
const avarageGrade = 65

switch (true) {
    case avarageGrade < 60:
        console.log("Student Success:", "Unsatisfactorily")
        break
    case avarageGrade >= 60 && avarageGrade <= 70:
        console.log("Student Success:", "Satisfactorily")
        break
    case avarageGrade >= 71 && avarageGrade <= 80:
        console.log("Student Success:", "Fine")
        break
    case avarageGrade >= 81 && avarageGrade <= 90:
        console.log("Student Success:", "Very Good")
        break
    case avarageGrade >= 91 && avarageGrade <= 100:
        console.log("Student Success:", "Perfectly")
        break
    default:
        console.log("Student Success:", "Not Allowed")
}
