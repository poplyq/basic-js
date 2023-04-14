const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = []

  arr.forEach(e => {
      if (e > 0) {
          newArr.push(e)
      }
  })
  const sort = (a, b) => a - b
  newArr.sort(sort)
  arr.forEach((el, i) => {
      console.log(i);
      if (el === -1) {
          newArr.splice(i, 0, el)
      }
  })
  return newArr
}

module.exports = {
  sortByHeight
};
