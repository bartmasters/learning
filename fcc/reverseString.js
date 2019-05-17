function reverseString(inputStr) {
  var outputArray = inputStr.split('');
  outputArray.reverse();
  var outputString = outputArray.join('');

  return outputString;
}

reverseString("hello")