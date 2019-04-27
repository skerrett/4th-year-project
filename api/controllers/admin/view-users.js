module.exports = async function subject (req, res) {

  // Get the `userId` parameter from the request.
  // This could have been set on the querystring, in
  // the request body, or as part of the URL used to
  // make the request.
  var userId = req.session.userId;

  // If no `userId` was specified, or it wasn't a number, return an error.

  if (!_.isNumber(userId)) {
    return res.badRequest(new Error('No user ID specified!'));
  }


  // Look up All the User
  var user = await User.find({isSuperAdmin: false});


  if (!user) {
    return res.redirect('/welcome');

  }
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/admin/users', {users: user});


};
