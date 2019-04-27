module.exports = async function attendance (req, res) {

  let lessonId = req.param('id');

  const attendance = await Attendance.find({lessons: lessonId}).populate('students');


  if (!lessonId) {
    return res.redirect('/welcome');

  }
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/admin/attendance', {attendance: attendance});





};
