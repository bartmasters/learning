function steamrollArray(arr) {
  // I'm a steamroller, baby
  let myArray = [];
  return arr.flat();
}

steamrollArray([1, [2], [3, [[4]]]]);