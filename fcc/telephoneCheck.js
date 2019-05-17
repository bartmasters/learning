function telephoneCheck(str) {
  // Good luck!
  // Start with confirming # of numbers - has to be 10 or 11
  const numNum = str.match(/\d/g).length;
  if (numNum < 10 || numNum > 11) {
    return false;
  }

  // If length is 11, first number has to be 1
  if (numNum === 11) {
    if (str[0] !== '1') {
      return false;
    }
  }

  // Check parentheses are around the area code
  const leftParen = (str.match(/\(/g) || '').length;
  const rightParen = (str.match(/\)/g) || '').length;

  if (leftParen > 0 || rightParen > 0) {
    const bob = str.match(/\(\d+\)/) || '0';
    if (bob[0].length !== 5) {
      return false;
    }
    if (leftParen > 1 || rightParen > 2) {
      return false;
    }
  }
  return true;
}

telephoneCheck('(555)5(55?)-5555');
// telephoneCheck("555-555-5555");
