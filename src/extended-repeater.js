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
function repeater(str, options) {
  if ((typeof str) !== 'string') str = String(str)
  let result
  let addition
  if (options) {
    if ('addition' in options) {
      if ((typeof options.addition) !== 'string') options.addition = String(options.addition)
      addition = Array(options.additionRepeatTimes || 1).fill(options.addition)
      addition = addition.join(`${options.additionSeparator || '|'}`)
      str = str + addition
    }
    result = Array(options.repeatTimes || 1).fill(str)
    return result.join(`${options.separator || '+'}`)
  } return str
}

module.exports = {
  repeater
};
