const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(a, b) {
  newArr = a.split('')
  
  let result = 0
  let newString = b.split('')
  newArr.forEach(e=>{
    if (newString.indexOf(e)>=0){
     newString.splice(newString.indexOf(e), 1).join('')
      result ++
    }
  })
  return  result
}

module.exports = {
  getCommonCharacterCount
};
