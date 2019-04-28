module.exports = async function subject (req, res) {

  //Method count up student averages in the class for the dates specified

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

  var x = await Subject.find({where: { id: req.param('id')}}).populate('students');
  var students = x[0].students;
  sails.log("Hello: "+students);


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
  var temp =0;
  for(let x of students) {
    sails.log("temp starting: " + temp);
    for (let value of lessons) {

      sails.log("temp mid: " + temp);
      temp += await Attendance.count({}).where({lessons: value.id, students: x.id,isPresent: true});

    }
    var obj = {
      'fName': x.Fname,
      'lName': x.Lname,
      'present': temp,
      'total': lessons.length,
      'percent': ((temp/lessons.length)*100),
    };
    data.push(obj);
    temp = 0;
  }

  return res.view('pages/statistics/student', {data: data, subject: subject });


};
