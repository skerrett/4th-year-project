module.exports = async function subject (req, res) {

// find the id of the lecture who is logged in a return the classes they teach.
 var subId = req.param('id');
  var sub = await Subject.find({lecturer: subId});
//end of testing safe to remove



  return res.view('pages/admin/subjects', {subject: sub});


};
