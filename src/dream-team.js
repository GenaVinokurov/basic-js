const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let teamArray = 0
  function s(str){
    let a=str.split('').filter(item=>item!=' ');
    return a[0];
  }
  if (Array.isArray(array)){
    return teamArray = array.filter(item => typeof item === "string" && item !=' ').map(item=>s(item).toLowerCase()).sort().join('').toUpperCase()
  } 
  return false
    
  
};
