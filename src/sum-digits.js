const { NotImplementedError } = require('../extensions/index.js');

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
function getSumOfDigits(n) {
  let newArr = n.toString().split('')
 let result = ''
 function sum (array){
  if (array.length > 1){
      let arr = array.map(e=> +e)
      let newarr= arr.reduce((sum,alt)=>sum+alt)
    if (newarr.toString().length>1){
     let newsum =  newarr.toString().split('')

     sum(newsum)
    } else return  result = +newarr.toString()
  
  } else return result +array.toString()
 }
 sum(newArr)
 return result
}

module.exports = {
  getSumOfDigits
};
