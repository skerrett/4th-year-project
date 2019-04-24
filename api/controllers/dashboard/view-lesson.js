module.exports = async function lesson (req, res) {

  var subjectId = req.param('id');

  var stud = await Lesson.find({subject: subjectId});





  if (!subjectId) {
    return res.redirect('/welcome');

  }
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/dashboard/lesson', {lesson: stud});





};
