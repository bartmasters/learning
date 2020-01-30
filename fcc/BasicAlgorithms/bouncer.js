function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  const outputArr = arr.filter(function(item) {
    if (item) {
      return true;
    }
  });
  return outputArr;
}

bouncer([7, 'ate', '', false, 9]);
ByteLengthQueuingStrat;
