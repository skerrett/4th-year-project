module.exports = async function lesson (req, res) {

  //Set up variables
  var subjectId = req.param('id');

  const start = new Date();
  let end = new Date();
  end.setDate(end.getDate()+14);

  //Find lessons with the params
  var stud = await Lesson.find({}).where({'date': {'>=': start, '<': end},subject: subjectId}).sort(
    'date ASC');


  var lessons = [];
  for(let x of stud) {

    //makes JSON object
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


  return res.view('pages/dashboard/lesson', {lesson: lessons});





};
