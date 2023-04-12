const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let i = 1
    let newAray = []
    let isArray = false
    for (i; i < 1000; i++) {
        isArray = false
        newAray = arr
        newAray.forEach(e => {
            if (Array.isArray(e)) {
                isArray = true;
            }
        })
        if (!isArray) {
            return i;
        } else {
            newAray = arr.flat()
            arr = newAray
        }
    }
}
}

module.exports = {
  DepthCalculator
};
