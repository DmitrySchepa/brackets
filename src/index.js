module.exports = function check(str, bracketsConfig) {
  const array = str.split('');
  const brackets = bracketsConfig.map((elem) => elem.join(''));
  if (array.length % 2 !== 0) return false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < brackets.length; j++) {
      if (array[i] === brackets[j][0] && array[i+1] === brackets[j][1]) {
        array.splice(i, 2);
        i = -1;
      }
    }
  }
  return array.length === 0 ? true : false;
}
