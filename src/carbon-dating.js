const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let abs
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(Number(sampleActivity)) || Number(sampleActivity) === 0 || Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) < 0) {
    return false
  } else {
    abs = Math.ceil(Math.log((+sampleActivity)/MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD)) -1
  }
  return Math.abs(abs)
};
