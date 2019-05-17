const proxyquire = require('proxyquire');
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should();
const Reservation = require('../../../lib/schema/reservation');
// const reservations = require('../../../lib/reservations');
const db = require('sqlite');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('Reservations Library', function() {
  const debugStub = function() {
    return sinon.stub();
  };
  let reservations;

  before(function() {
    reservations = proxyquire('../../../lib/reservations', {
      debug: debugStub
    });
  });
  context('Validate', function() {
    it('should pass a valid reservation with no optional fields', function() {
      const reservation = new Reservation({
        date: '2019/05/15',
        time: '05:00 PM',
        party: 4,
        name: 'Smith',
        email: 'username@example.com'
      });
      return reservations
        .validate(reservation)
        .then(actual => actual.should.deep.equal(reservation));
    });

    it('should fail an invalid reservation with bad email', function() {
      const reservation = new Reservation({
        date: '2019/05/15',
        time: '05:00 PM',
        party: 4,
        name: 'Smith',
        email: 'derp'
      });

      return reservations
        .validate(reservation)
        .catch(error => error.should.be.an('error').and.not.be.null);
    });

    context('Create', function() {
      let dbStub;
      let validateSpy;

      before(function() {
        dbStub = sinon.stub(db, 'run').resolves({
          stmt: {
            lastID: 1349
          }
        });
        reservations = proxyquire('../../../lib/reservations', {
          debug: debugStub,
          sqlite: dbStub
        });
      });

      after(function() {
        dbStub.restore();
      });

      it('should return the created reservation ID', function(done) {
        const reservation = new Reservation({
          date: '2019/05/15',
          time: '09:00 PM',
          party: 4,
          name: 'blah',
          email: 'username@example.com'
        });

        reservations
          .create(reservation)
          .then(lastID => {
            lastID.should.deep.equal(1349);
            done();
          })
          .catch(error => done(error));
      });

      it('should call the validator with a transformed reservation once', function(done) {
        const reservation = new Reservation({
          date: '2019/05/15',
          time: '09:00 AM',
          party: 4,
          name: 'blah',
          email: 'username@example.com'
        });

        validateSpy = sinon.spy(reservations, 'validate');

        reservations
          .create(reservation)
          .then(() => {
            validateSpy.should.have.been.calledOnce.and.been.calledWith({
              datetime: '2019-05-15T09:00:00.000Z',
              party: 4,
              name: 'blah',
              email: 'username@example.com',
              message: undefined,
              phone: undefined
            });

            validateSpy.restore();
            done();
          })
          .catch(error => done(error));
      });
    });
  });

  context('Save', function() {
    let dbMock;

    before(function() {
      dbMock = sinon.mock(db);
    });

    after(function() {
      dbMock.restore();
    });

    it('should only call the db once', function() {
      dbMock.expects('run').once();

      reservations = proxyquire('../../../lib/reservations', {
        debug: debugStub,
        sqlite: dbMock
      });

      const reservation = {
        datetime: '2019-05-15T21:00:00.000Z',
        party: 4,
        name: 'blah',
        email: 'username@example.com',
        message: undefined,
        phone: undefined
      };

      reservations.save(reservation);

      dbMock.verify();
    });
  });
});
