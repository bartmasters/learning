function ConvertHandler() {
  const units = [
    {
      source: 'gal',
      dest: 'l',
    },
    {
      source: 'l',
      dest: 'gal',
    },
    {
      source: 'mi',
      dest: 'km',
    },
    {
      source: 'km',
      dest: 'mi',
    },
    {
      source: 'lbs',
      dest: 'kg',
    },
    {
      source: 'kg',
      dest: 'lbs',
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
    let ut = toLowerCase(input);
    console.log('unit is ' + ut);
    console.log(units.find((unit) => unit.source == ut));
    return result[2];
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
