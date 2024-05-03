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

module.exports = {capitalize, reverse};