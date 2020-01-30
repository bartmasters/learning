function destroyer(arr) {
  // Remove all the values

  var bob = arguments[1];
  var returnArray = arr.filter(function (item) {
    if (item == bob) {
      return false;
    } else {
      return true;
    }
  });
  var returnArray2 = returnArray;

  if (arguments[2]) {
    bob = arguments[2];
    returnArray = returnArray.filter(function (item) {
      if (item == bob) {
        return false;
      } else {
        return true;
      }
    });
  }

  if (arguments[3]) {
    bob = arguments[3];
    returnArray = returnArray.filter(function (item) {
      if (item == bob) {
        return false;
      } else {
        return true;
      }
    });
  }
  return returnArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);