module.exports = async function lesson (req, res) {

  var id = req.param('id');

  var subjectId = await Subject.find({
    where: {id : id},
  });


  if (!subjectId) {
    return res.redirect('/welcome');

  }
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/admin/lesson-create', {subject: subjectId});





};
