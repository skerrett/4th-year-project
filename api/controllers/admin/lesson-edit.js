module.exports = async function lesson (req, res) {

  var lessonId = req.param('id');


  var stud = await Lesson.find({}).where({id: lessonId});


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

  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/admin/lesson-edit', {lesson: lessons});





};
