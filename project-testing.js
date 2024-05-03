const capitalize = (string) => {
  if(string.length ===0) return '';
  return string[0].toUpperCase() + string.substring(1);
}

const reverse = (string) => {
  const reverseArray = [];
  string.split('').forEach((char) => {
    reverseArray.unshift(char);
  });
  return reverseArray.join('');
}

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1/num2,
  multiply: (num1, num2) => num1 * num2
}

module.exports = {capitalize, reverse, calculator};