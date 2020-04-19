function ConvertHandler() {
  const units = [
    {
      source: 'gal',
      dest: 'l',
      name: 'gallons',
    },
    {
      source: 'l',
      dest: 'gal',
      name: 'litres',
    },
    {
      source: 'mi',
      dest: 'km',
      name: 'miles',
    },
    {
      source: 'km',
      dest: 'mi',
      name: 'kilometers',
    },
    {
      source: 'lbs',
      dest: 'kg',
      name: 'pounds',
    },
    {
      source: 'kg',
      dest: 'lbs',
      name: 'kilograms',
    },
  ];
  this.getNum = function (input) {
    // Turf out double fractions
    let fractionCount = (input.match(/\//g) || []).length;
    if (fractionCount > 1) {
      return 'invalid number';
    }
    const result = input.match(/([\d\.\/]*)([a-zA-Z]*)/);
    let output = eval(result[1]);
    return output > 0 ? output : 1;
  };

  this.getUnit = function (input) {
    const result = input.match(/([\d\.\/]*)([a-zA-Z]*)/);
    let unit = units.filter((u) => u.source === result[2].toLowerCase());
    return unit.length > 0 ? result[2] : 'invalid unit';
  };

  this.getReturnUnit = function (input) {
    let unit = units.filter((u) => u.source === input.toLowerCase());
    return unit.length > 0 ? unit[0].dest : 'invalid unit';
  };

  this.spellOutUnit = function (input) {
    let unit = units.filter((u) => u.source === input.toLowerCase());
    return unit.length > 0 ? unit[0].name : 'invalid unit';
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if (isNaN(initNum)) {
      return '';
    }
    let result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lb':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = initNum;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    result =
      initNum +
      ' ' +
      this.spellOutUnit(initUnit) +
      ' converts to ' +
      returnNum +
      ' ' +
      this.spellOutUnit(returnUnit);
    return result;
  };
}

module.exports = ConvertHandler;
