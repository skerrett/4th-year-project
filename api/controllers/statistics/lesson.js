module.exports = async function subject (req, res) {

  //Method find the Lessons to be returned for the date

  // Get the `userId` parameter from the request.
  // This could have been set on the querystring, in
  // the request body, or as part of the URL used to
  // make the request.
  const userId = req.session.userId;

  // If no `userId` was specified, or it wasn't a number, return an error.
  if (!_.isNumber(userId)) {
    return res.badRequest(new Error('No user ID specified!'));
  }

  var start = new Date(req.param('start'));
  var end = new Date(req.param('end'));

  var lessons = await Lesson.find({where: {date: {'>=': start, '<=': end},subject: req.param('id')},
  select: ['id','date']}).sort(
    'date ASC');

  var userSubjects = await Subject.find({lecturer: userId});

  var subject = [];
  for(let value of userSubjects){
    var obj1 = {
      'id': value.id,
      'name': value.subjectName,
    };
    subject.push(obj1);
  }

  var data = [];
  for(let value of lessons){

    var temp = await sails.helpers.getLessonAttendance(value.id);
    var obj = {
      'id': value.id,
      'average': temp.Average,
      'date': value.date,
    };
    data.push(obj);
  }

  return res.view('pages/statistics/lesson', {data: data, subject: subject });


};
