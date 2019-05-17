function convertToRoman(num) {
  const tempString = num + '';
  const numArr = tempString.split('');

  const patternArray = [
    '',
    's',
    'ss',
    'sss',
    'sl',
    'l',
    'ls',
    'lss',
    'lsss',
    'sm',
  ];
  let colCount = 0;
  let returnArray = [];

  for (let i = numArr.length; i > 0; i -= 1) {
    const bob = patternArray[numArr[i - 1]];

    const romNums = ['', '', ''];

    switch (colCount) {
      case 0:
        romNums[0] = 'X';
        romNums[1] = 'I';
        romNums[2] = 'V';
        break;
      case 1:
        romNums[0] = 'C';
        romNums[1] = 'X';
        romNums[2] = 'L';
        break;
      case 2:
        romNums[0] = 'M';
        romNums[1] = 'C';
        romNums[2] = 'D';
        break;
      case 3:
        romNums[0] = 'M';
        romNums[1] = 'M';
        romNums[2] = 'M';
        break;
    }
    const p1 = bob.replace(/m/g, romNums[0]);
    const p2 = p1.replace(/s/g, romNums[1]);
    const p3 = p2.replace(/l/g, romNums[2]);

    returnArray.push(p3);
    colCount += 1;
  }
  returnArray.reverse();
  return returnArray.join('');
}

console.log(convertToRoman(1000));
