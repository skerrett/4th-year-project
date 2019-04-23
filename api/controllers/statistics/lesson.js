module.exports = async function subject (req, res) {

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
  for(let value of lessons){

    var temp = await sails.helpers.getLessonAttendance(value.id);
    var obj = {
      'id': value.id,
      'average': temp.Average,
      'date': value.date,
    };
    data.push(obj);
  }
  sails.log("Hello: "+students);
  /*var averages =[];
  for(let i = 0; i < subjects.length; i++){

    var temp = await sails.helpers.getLessonsTotals(subjects[i].id);
    var obj = {
      'name': subjects[i].subjectName,
      'average': temp.Average,
      'id': subjects[i].id
    };
    averages.push(obj);
  }




//end of testing safe to remove

  // If no user was found, redirect to signup.
  /*
    if (!user) {
      return res.redirect('/welcome');

    }
    */
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/statistics/lesson', {data: data, subject: subject });


};
