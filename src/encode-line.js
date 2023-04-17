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
function encodeLine( str ) {
  let result = ''
  let arr = str.split('')
  arr.push('')
  arr.reduce((acc, item, index) => {
    if (acc.includes(item) || index === 0) acc.push(item)
    if (!acc.includes(item)){
      if (acc.length === 1) {
        result = result + `${acc[0]}`
      } else result = result + `${acc.length}${acc[0]}`
      
      acc.length = 0
      acc.push(item)
    }
    return acc
  }, [])

  return result
}

module.exports = {
  encodeLine
};
