var util = require('util');

describe('Helper (helper)', function() {

  describe('#getLessonAttendance()', function() {
    it('should return 100 %', function (done) {
      sails.helpers.getLessonAttendance(261)
        .then(function(getLessonAttendance) {

          if (getLessonAttendance.Average !== 100) {
            return done(new Error(
              'Should return exactly 100 percent '+
              'But instead, got: '+util.inspect(getLessonAttendance, {depth:null})+''
            ));
          }//-•

          return done();

        })
        .catch(done);
    });
  });

  describe('#getLessonCount()', function() {
    it('should return 26 ', function (done) {
      sails.helpers.getLessonsCount(31)
        .then(function(getLessonAttendance) {

          if (getLessonAttendance.count !== 26) {
            return done(new Error(
              'Should return exactly 26  '+
              'But instead, got: '+util.inspect(getLessonAttendance, {depth:null})+''
            ));
          }//-•

          return done();

        })
        .catch(done);
    });
  });

  describe('#getLessonsTotals()', function() {
    it('should return 30.76923076923077%', function (done) {
      sails.helpers.getLessonsTotals(31)
        .then(function(getLessonTotals) {

          if (getLessonTotals.Average !== 30.76923076923077) {
            return done(new Error(
              'Should return exactly 30.76923076923077 percent '+
              'But instead, got: '+util.inspect(getLessonTotals, {depth:null})+''
            ));
          }//-•

          return done();

        })
        .catch(done);
    });
  });

});
