function myReplace(str, before, after) {
  
  var regexp = new RegExp(before, "ig");
  var newStr = str.replace(regexp, after);
  var splitStr = [];
  var finalStr;

  for (var i=0, ch; i<newStr.length; i++){
      ch = str.charAt(i);
      if (ch >= 'A' && ch <= 'Z'){
          splitStr[i] = newStr.charAt(i).toUpperCase();
      }
          else {
              splitStr[i] = newStr.charAt(i);
          }
    }

    newStr = splitStr.join("");
  
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");