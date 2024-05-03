const capitalize = (string) => {
  if(string.length ===0) return '';
  return string[0].toUpperCase() + string.substring(1);
}
module.exports = {capitalize};