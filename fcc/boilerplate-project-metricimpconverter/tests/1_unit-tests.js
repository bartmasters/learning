let chai = require('chai');
let assert = chai.assert;
let ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  suite('Function convertHandler.getNum(input)', function () {
    test('Whole number input', function (done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test('Decimal Input', function (done) {
      let input = '0.5mi';
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });

    test('Fractional Input', function (done) {
      let input = '3/4kg';
      assert.equal(convertHandler.getNum(input), 0.75);
      done();
    });

    test('Fractional Input w/ Decimal', function (done) {
      let input = '3.0/.5kg';
      assert.equal(convertHandler.getNum(input), 6);
      done();
    });

    test('Invalid Input (double fraction)', function (done) {
      let input = '3/7.2/4kg';
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
    });

    test('No Numerical Input', function (done) {
      let input = 'mi';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite('Function convertHandler.getUnit(input)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      let input = [
        'gal',
        'l',
        'mi',
        'km',
        'lbs',
        'kg',
        'GAL',
        'L',
        'MI',
        'KM',
        'LBS',
        'KG',
      ];
      input.forEach((ele) => {
        assert.equal(convertHandler.getUnit(ele), ele);
      });
      done();
    });

    test('Unknown Unit Input', function (done) {
      let input = 'Derp';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });
  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      var expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite('Function convertHandler.spellOutUnit(unit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      var expect = [
        'gallons',
        'litres',
        'miles',
        'kilometers',
        'pounds',
        'kilograms',
      ];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite('Function convertHandler.convert(num, unit)', function () {
    test('Gal to L', function (done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('L to Gal', function (done) {
      var input = [10, 'l'];
      var expected = 2.64172;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('Mi to Km', function (done) {
      var input = [10, 'mi'];
      var expected = 16.0934;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('Km to Mi', function (done) {
      var input = [10, 'km'];
      var expected = 6.21371;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('Lbs to Kg', function (done) {
      var input = [10, 'lb'];
      var expected = 4.53592;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('Kg to Lbs', function (done) {
      var input = [10, 'kg'];
      var expected = 22.0462;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
  });
});
