module.exports = async function lesson (req, res) {

  var id = req.param('id');

  var studentId = await Student.find({
    where: {id : id},
  });


  if (!studentId) {
    return res.redirect('/welcome');

  }

  return res.view('pages/admin/student-subject', {student: studentId});





};
