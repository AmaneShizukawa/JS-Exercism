// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
   const number1 = array1.join('');
   const number2 = array2.join('');
   return +number1 + +number2;
}
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
   const check = String(value).split('').reverse().join('');
   if (+check === value) {
      return true;
   } else {
      return false;
   }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
    return 'Required field'
  }
  const number = +input
  if (number === 0 || Number.isNaN(number)) {
    return `Must be a number besides 0`
  } else {
    return ``
  }

}
