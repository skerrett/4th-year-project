module.exports = async function lesson (req, res) {



  let end;
  let start;
  let subjectId = req.param('id');

  if(req.param('start') !== undefined || req.param('end') !== undefined) {
    sails.log("1");
    start = new Date(req.param('start'));
    end = new Date(req.param('end'));
  } else {
    start = new Date();
    end = new Date();
    start.setDate(start.getDate() - 28);
    sails.log("2");
  }

  sails.log("Start:"+ start);
  const stud = await Lesson.find({}).where({'date': {'>=': start, '<': end}, subject: subjectId}).sort(
    'date ASC');


  var lessons = [];
  for(let x of stud) {

    var split_date = x.date.toString().split('G');
    var obj = {
      'subject': x.subject,
      'date': split_date[0],
      'id': x.id,
    };
    lessons.push(obj);
  }





  if (!subjectId) {
    return res.redirect('/welcome');

  }
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/history/lesson', {lesson: lessons});





};
