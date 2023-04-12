const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let numberCats = 0
  let newArray = []
      function flat(array) {
          array.forEach(function (el) {
              if (Array.isArray(el)) {
                  flat(el);
              }
              else { newArray.push(el); }
          });
      };




  if (Array.isArray(arr)) {
      flat(arr)
    newArray.forEach(e=>{
      if (e==="^^"){
          numberCats++
      }
    })
  } else {
      return 0;
  }
  return  numberCats
}

module.exports = {
  countCats
};
 
