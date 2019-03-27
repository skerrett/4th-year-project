module.exports = async function attendance (req, res) {

  var lessonId = req.param('id');

  var attendance = await Attendance.find({lessons: lessonId}).populate('students');






  if (!lessonId) {
    return res.redirect('/welcome');

  }
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/dashboard/attendance', {attendance: attendance});





};
