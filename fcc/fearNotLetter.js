function fearNotLetter(str) {
  var firstChar = str.charCodeAt(0);
  var outputChar;
  for (var i=1; i<str.length; i++){
      firstChar++;
      if (firstChar != str.charCodeAt(i)){
        outputChar = String.fromCharCode(firstChar);
        i=99;
      }
  }
  return outputChar;
}

fearNotLetter("bcd")