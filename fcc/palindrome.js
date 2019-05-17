function palindrome(str) {
  // Good luck!

  // Get rid of the crud from the input string

  const newStr = str.replace(/\W/g, '');
  const nextStr = newStr.replace(/_/g, '');

  // Get rid of upper case

  const lowerStr = nextStr.toLowerCase();

  // Reverse the input string
  const inputArray = lowerStr.split('');
  inputArray.reverse();
  const reversedString = inputArray.join('');

  if (lowerStr === reversedString) {
    return true;
  } else {
    return false;
  }
}

palindrome('race car');
