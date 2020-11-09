export class NumberUtil {
  static getRandomInteger(min: number, max: number) {
    // double NOT bitwise operator
    // faster substitute for Math.floor()
    return ~~(Math.random() * (max - min + 1)) + min;
  }
}
