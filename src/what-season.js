const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) return 'Unable to determine the time of year!'
  if (date.getTime() == null) throw Error()
  let calendar = ['winter', 'winter',  'spring', 'spring', 'spring', 'summer', 'summer' , 'summer', 'autumn', 'autumn', 'autumn', 'winter']
  result = calendar[date.getMonth()]
  return result
};
