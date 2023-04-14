const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(str) {
  let arr = str.split('-').join('').split('')
  console.log(arr);
  let isMac = true
  if(arr.length === 12){
  arr.forEach(e=>{
     if(Number.isInteger(+e) || e === "A" || e === 'B' || e === 'C' || e === 'D' || e === 'E' || e==='F'){
     }  else {
      isMac = false
     }
  })
  } else {
    isMac= false
  }
  return isMac
  }
module.exports = {
  isMAC48Address
};
