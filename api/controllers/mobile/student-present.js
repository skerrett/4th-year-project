

module.exports = async function updateAttendance(req, res) {

  var student = await Student.find({}).where({nfcCode: req.param('input')}).populate('subjects');

  sails.log(student[0].subjects);
  sails.log(student);

  var lesson = await Lesson.find()
    .where({
      'date': {'>=': '2019-04-30T10:00:00', '<': '2019-04-30T11:00:00'},
    });

  sails.log(lesson);
   return res.ok();
};
