const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
let arr = email.split('')

let domain = arr.slice((arr.indexOf('@')+1))
if (domain.includes('@')){

  domain.splice(0,( domain.indexOf("@") +1))
}
return domain.join('')
}

module.exports = {
  getEmailDomain
};
