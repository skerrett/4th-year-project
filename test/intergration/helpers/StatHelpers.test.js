var util = require('util');

describe('Helper (helper)', function() {

  describe('#getLessonAttendance()', function() {
    it('should return 33.33333333333333  %', function (done) {
      sails.helpers.getLessonAttendance(261)
        .then(function(getLessonAttendance) {

          if (getLessonAttendance.Average !== 33.33333333333333 ) {
            return done(new Error(
              'Should return exactly 33.33333333333333  percent '+
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
    it('should return  17.948717948717945%', function (done) {
      sails.helpers.getLessonsTotals(31)
        .then(function(getLessonTotals) {

          if (getLessonTotals.Average !==  17.948717948717945 ) {
            return done(new Error(
              'Should return exactly  17.948717948717945 percent '+
              'But instead, got: '+util.inspect(getLessonTotals, {depth:null})+''
            ));
          }//-•

          return done();

        })
        .catch(done);
    });
  });

});
