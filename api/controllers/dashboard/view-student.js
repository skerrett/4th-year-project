module.exports = async function subject (req, res) {

  // Get the `userId` parameter from the request.
  // This could have been set on the querystring, in
  // the request body, or as part of the URL used to
  // make the request.
   sails.log(req.param('id'));
   var subjectId = req.param('id');



  // If no `userId` was specified, or it wasn't a number, return an error.
  /*if (!_.isNumber(userId)) {
    return res.badRequest(new Error('No user ID specified!'));
  }
*/
  // Look up the user whose ID was specified in the request.


  // testing purpose
  var stud = await Subject.find({id: subjectId}).populate('students');
  var student =stud[0].students;
  return res.json(student);

//end of testing safe to remove

  // If no subject was found, redirect to welcome.

  if (!subjectId) {
    return res.redirect('/welcome');

  }
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/dashboard/student', {subject: subjectId});
};
