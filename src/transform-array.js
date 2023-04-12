const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = []
  if(Array.isArray(arr)){
    for (i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i])) {
          newArr.push(arr[i])
      } else {
          console.log(arr[i]);
              switch(arr[i]){
                case ('--discard-next'): i++; break;
                case ('--discard-prev'): if(!(i == 0)){ newArr.pop() }; break
                case ('--double-next'): if(!( i===arr.length-1)) { newArr.push(arr[i+1])}; break;
                case ('--double-prev'): if(!(i == 0)){newArr.push(arr[i-1])}; break;
                default : newArr.push(arr[i])
              }
            }
      }
} else throw new Error('\'arr\' parameter must be an instance of the Array!') 
return newArr;
}

module.exports = {
  transform
};
