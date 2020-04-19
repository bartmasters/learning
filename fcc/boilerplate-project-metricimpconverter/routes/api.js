/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

let expect = require('chai').expect;
let ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  var convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function (req, res) {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    let data = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString,
    };
    res.status(200).send;
    res.json(data);
  });
};
