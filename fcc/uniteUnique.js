function uniteUnique(arr) {
  var storageArray = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      storageArray.push(arguments[i][j]);
    }
  }

  var checkArray = [];
  var a;
  for (i = 0; i < storageArray.length; i++) {
    a = checkArray.indexOf(storageArray[i]);
    // If it can't find the storageArray value in the checkArray,
    // insert it in there, else remove the duplicate from storageArray.
    // Awful variable names.

    if (a == -1) {
      checkArray.push(storageArray[i]);
    } else {
      storageArray.splice(i, 1);
      i--;
    }
  }
  console.log(storageArray);
  return storageArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);