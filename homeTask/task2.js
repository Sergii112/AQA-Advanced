
const avarageGrade = 100
let studentSuccess

switch (true) {
    case avarageGrade < 60:
        console.log("Unsatisfactorily")
        break
    case avarageGrade >= 60 && avarageGrade <= 70:
        console.log("Satisfactorily")
        break
    case avarageGrade >= 71 && avarageGrade <= 80:
        console.log("Fine")
        break
    case avarageGrade >= 81 && avarageGrade <= 90:
        console.log("Very Good")
        break
    case avarageGrade >= 91 && avarageGrade <= 100:
        console.log("Perfectly")
        break
    default:
        console.log("Not Allowed")
}
