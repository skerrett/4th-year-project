module.exports = async function subject (req, res) {

 var subId = req.param('id');
  var sub = await Subject.find({lecturer: subId});



  return res.view('pages/admin/subjects', {subject: sub});


};
