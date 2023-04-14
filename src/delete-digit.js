const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newDigit = n.toString().split('')

  let newarr = []
  for (i = 0; i < newDigit.length; i++) {
    let current = [...newDigit]
    current.splice(i, 1)
    newarr.push(+current.join(''))


  }
  function compareNumbers(a, b) {
    return a - b;
  }
  newarr.sort(compareNumbers)
  return newarr[newarr.length - 1]

}

module.exports = {
  deleteDigit
};
