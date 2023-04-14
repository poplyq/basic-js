const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newArr = []
  if (matrix.length>1){
   
     for(i=0; i<matrix[0].length; i++){
         newArr.push(matrix[0][i])
          for(j=1; j<matrix.length; j++){
                  if ((matrix[j-1][i]) !=0) {
                     newArr.push(matrix[j][i])   
                  }
          }
     }
  } else {
     newArr = [...matrix]
  }
   return +newArr.reduce((sum,alt)=>sum+alt).toString();
   }

module.exports = {
  getMatrixElementsSum
};
