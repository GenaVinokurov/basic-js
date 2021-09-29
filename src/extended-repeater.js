import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  if (typeof str != 'string') String(str)
  if (!options.hasOwnProperty('addition')) {
    options.addition = ''
  }
  if (typeof options.addition !== 'string') {
    options.addition = String(options.addition)
  }
  options.separator = options.separator || '+'
  options.additionSeparator = options.additionSeparator || '|'

  let result = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) +
    options.addition + options.separator).repeat(options.repeatTimes - 1) +
    str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) +
    options.addition


  return result
}
