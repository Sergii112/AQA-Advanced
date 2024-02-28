class MyMath {
  static PI = 3;

  static getCircleArea(radius) {
    return radius * this.PI;
  }
}

const math = new MyMath();
// console.log(math.PI)
// console.log(MyMath.PI)
// console.log(MyMath.getCircleArea(12))

class DateTimeHelper {
  static getCurrentDay() {
    return new Date().getDate();
  }
}

console.log(DateTimeHelper.getCurrentDay());
