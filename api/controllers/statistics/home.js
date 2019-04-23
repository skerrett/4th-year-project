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

  var subjects = await Subject.find({where: {lecturer: userId},
    select: ['id','subjectName'] });


  var averages =[];
  for(let i = 0; i < subjects.length; i++){

    var temp = await sails.helpers.getLessonsTotals(subjects[i].id);
    var obj = {
      'name': subjects[i].subjectName,
      'average': temp.Average,
      'id': subjects[i].id
    };
    averages.push(obj);
  }




//end of testing safe to remove

  // If no user was found, redirect to signup.
/*
  if (!user) {
    return res.redirect('/welcome');

  }
  */
  // Display the welcome view, setting the view variable
  // named "name" to the value of the user's name.


  return res.view('pages/statistics/home', {data: averages});


};
