/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  this.number = number;

  while (this.number > 9) {
    this.number = String(this.number).split('').reduce((sum, num) => Number(num) + sum,
      0);
  }

  return this.number;
}

module.exports = getSumOfDigits;
