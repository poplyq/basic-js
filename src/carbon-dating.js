const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(act) {
  if (typeof act === 'string') {
      let t = +act
      if (t <= 15 && t >= 0 && t) {
          let a = Math.log(15 / t)
         
          return Math.ceil(a / (0.693 / 5730 * 10000) * 10000)
      } else  return false 

  } else return false
}
module.exports = {
  dateSample
};
