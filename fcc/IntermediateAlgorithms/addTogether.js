function addTogether() {
  if (arguments.length > 2) {
    return undefined;
  }
  if (arguments.length == 2) {
    if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') {
      return undefined;
    }
    return arguments[0] + arguments[1];
  }

  let myVar = arguments[0];
  if (typeof myVar !== 'number') {
    return undefined;
  }

  return function(newNum) {
    if (typeof newNum != 'number') {
      return undefined;
    }
    return myVar + newNum;
  };
}
let bob = addTogether(3)(5);
console.log(bob);
