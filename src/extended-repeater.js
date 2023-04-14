const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {
  let newString = str
  let addition = []
  let newAray = []
  let result = ''
  if (obj.addition) {
     
      if (obj.additionRepeatTimes) {
          for (a = 1; a <= obj.additionRepeatTimes; a++) {
              addition.push(obj.addition)
          }
          if (obj.additionSeparator) {
              addition = addition.join(obj.additionSeparator)
          } else {
              addition = addition.join('|')
           console.log(addition);
          }
          newString = newString + addition
      } else {
          newString =  newString + obj.addition
      }
  }
  if (obj.repeatTimes) {
      for (i = 1; i <= obj.repeatTimes; i++) {
          newAray.push(newString)
      }
      if (obj.separator) {
          result = newAray.join(obj.separator)
      } else {
          result = newAray.join('+')

      }
  } else {
      result = newString
  }
  return result
} 

module.exports = {
  repeater
};
