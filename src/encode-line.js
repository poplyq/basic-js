const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newarr = str.split('')
  let newSet = new Set(newarr)
  let newObj= {}
  Array.from(newSet).forEach(e=>{
   let a = 0
    for(i=0; i<newarr.length; i++){
      if (e == newarr[i]){
       a++
      }
    }
    newObj[e] = a
  })
  let preResult = Object.entries(newObj)
  let result = []
  preResult.forEach(ele=>{
    result.push(ele[1])
    result.push(ele[0])
  })
 return result.join('');
}

module.exports = {
  encodeLine
};
