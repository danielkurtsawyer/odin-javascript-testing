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

const caesarCipher = (string, shiftFactor) => {
  let encryptedString = '';
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  // reduce shiftFactor
  shiftFactor = shiftFactor % 26;
  // create the cipher alphabet
  const cipherAlphabet = alphabet.slice(shiftFactor).concat(alphabet.slice(0, shiftFactor));
  console.log(cipherAlphabet);
  // iterate through the original string, appending the encrypted character to the end of the the encryptedString
  [...string].forEach((char) => {
    // check to see if the lower case version of the char is a letter
    if(alphabet.includes(char.toLowerCase())){
      // find the index of that letter in the original alphabet array
      const index = alphabet.indexOf(char.toLowerCase());
      // if the character was uppercase originally, then we add the uppercase char from the cipherAlphabet
      if(char === char.toUpperCase()){
        encryptedString += cipherAlphabet[index].toUpperCase();
      }else {
        // if it was lowercase originally, then add the lowercase char from the cipherAlphabet
        encryptedString += cipherAlphabet[index];
      }
    }else {
      // if it's not a letter, then it is punctuation or some special character not covered by the cipher, so just add it as is
      encryptedString += char;
    }
  })
  // return the encrypted string
  return encryptedString;
}

module.exports = {capitalize, reverse, calculator, caesarCipher};