module.exports = async function subject (req, res) {

// find the id of the lecture who is logged in a return the classes they teach.
  var subId = req.param('id');
  var sub = await Subject.find({id: subId});




  return res.view('pages/admin/subject-edit', {subject: sub});


};
