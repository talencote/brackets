module.exports = function check(str, bracketsConfig) {
  if (bracketsConfig.length === 0 || str.length === 0 || (str.length % 2 === 1)) return false;
  for (let i = str.length; i >= 0; i--) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      while (true) {
        if (!str.includes(bracketsConfig[j].join(''))) break;
        str = str.replace(bracketsConfig[j].join(''), '');
      }
    }
  }
  return str === '';
}