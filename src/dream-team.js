import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(array) {
  let teamArray = 0
  function s(str) {
    let a = str.split('').filter(item => item != ' ');
    return a[0];
  }
  if (Array.isArray(array)) {
    return teamArray = array.filter(item => typeof item === "string" && item != ' ').map(item => s(item).toLowerCase()).sort().join('').toUpperCase()
  }
  return false


}
