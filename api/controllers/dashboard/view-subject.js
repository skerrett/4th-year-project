module.exports = async function subject (req, res) {

  // Get the `userId` parameter from the request.
  // This could have been set on the querystring, in
  // the request body, or as part of the URL used to
  // make the request.
  var userId = req.session.userId;

  // If no `userId` was specified, or it wasn't a number, return an error.
  /*if (!_.isNumber(userId)) {
    return res.badRequest(new Error('No user ID specified!'));
  }
*/
  // Look up the user whose ID was specified in the request.
  var user = await User.find({id: userId});


// find the id of the lecture who is logged in a return the classes they teach.
var sub = await Subject.find({lecturer: userId});


//end of testing safe to remove

  // If no user was found, redirect to signup.

  if (!user) {
    return res.redirect('/welcome');

  }
    // Display the welcome view, setting the view variable
    // named "name" to the value of the user's name.


    return res.view('pages/dashboard/subject', {subject: sub});


};
