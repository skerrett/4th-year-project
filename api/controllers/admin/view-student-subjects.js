module.exports = async function lesson (req, res) {

  var id = req.param('id');

  var studentId = await Student.find({
    where: {id : id},
  });


  if (!studentId) {
    return res.redirect('/welcome');

  }
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/admin/student-subject', {student: studentId});





};
