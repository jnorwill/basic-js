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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const result = arr.slice()
  result.find((item, index) => {
    if (item === '--double-next') {
      if (!result[index + 1]) {
        result.splice(index, 1)
      } else {
        result.splice(index, 1, result[index + 1])
      }
    } else if (item === '--double-prev') {
      if (!result[index - 1]) {
        result.splice(index, 1)
      } else {
        result.splice(index, 1, result[index - 1])
      }
    } else if (item === '--discard-next') {
      if (!result[index + 1]) {
        result.splice(index, 1)
      } else {
        result.splice(index, 2, '')
      }
    } else if (item === '--discard-prev') {
      if (!result[index - 1]) {
        result.splice(index, 1)
      } else {
        result.splice(index - 1, 2, '')
      }
    }
  })
  return result.filter(item => item !== '')
}

module.exports = {
  transform
};
