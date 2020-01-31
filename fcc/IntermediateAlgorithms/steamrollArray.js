function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArray = arr.flat(9);
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
