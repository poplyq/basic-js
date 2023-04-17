const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let newMonth = date.getMonth()
  let newDate = new Date() 
  let season = ''
if (!(date.getTime() == newDate.getTime())){
if (date =='Invalid Date'){
  throw Error ('Invalid Date!')
} else {
  switch (newMonth) {
    case (0): season = "winter"; break;
    case (1): season = "winter"; break;
    case (11): season = "winter"; break;
    case (2): season = 'spring'; break;
    case (3): season = 'spring'; break;
    case (4): season = 'spring'; break;
    case (5): season = "summer"; break;
    case (6): season = "summer"; break;
    case (7): season = "summer"; break;
    case (10):season = 'autumn'; break
    case (9):  season = 'autumn'; break
    case (8):  season = 'autumn'; break

  }
}
}else {
  season = 'Unable to determine the time of year!'
}

  return season;
}




module.exports = {
  getSeason
};
