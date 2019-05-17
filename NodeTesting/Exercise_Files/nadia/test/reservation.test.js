const chai = require('chai');
const should = chai.should();
const Reservation = require('../lib/schema/reservation');

describe('Reservation Schema', function() {
  context('Date and Time combination', function() {
    it('should return a valid date and time with valid input', function() {
      const date = '2019/05/10';
      const time = '07:15 PM';

      Reservation.combineDateTime(date, time).should.equal(
        '2019-05-10T19:15:00.000Z'
      );
    });

    it('should turn null on bad date and time', function() {
      const date = '@#$';
      const time = 'fail';

      should.not.exist(Reservation.combineDateTime(date, time));
    });
  });

  context('Validator', function() {
    it('should pass a valid reservation with no optional fields', function(done) {
      const reservation = new Reservation({
        date: '2019/05/15',
        time: '09:00:00 AM',
        party: 4,
        name: 'Bob',
        email: 'username@example.com'
      });

      reservation.validator(function(error, value) {
        value.should.deep.equal(reservation);
        done(error);
      });
    });

    it('should fail a reservation with a bad email', function(done) {
      const reservation = new Reservation({
        date: '2019/05/15',
        time: '09:00:00 AM',
        party: 4,
        name: 'Bob',
        email: 'derp'
      });

      reservation.validator(function(error) {
        error.should.be.an('error').and.not.be.null;
        done();
      });
    });
  });
});
