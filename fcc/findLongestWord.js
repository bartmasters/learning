function findLongestWord(str) {
  var inputArray = str.split(" ");

  var longestLength = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) {
      longestLength = inputArray[i].length;
    }
  }
  return longestLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");