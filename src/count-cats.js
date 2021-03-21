const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let count = 0
  for(let cat of array){
    count = count + cat.filter(item => item==='^^').length
    
  }
  return count
};
