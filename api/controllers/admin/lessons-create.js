module.exports = async function create (req, res) {

  //get Variable from the URL
 var option = req.param('option');
 date = req.param('date');

  var d = new Date(date);

  d.setDate(d.getDate());



//Go through both options
  // both end in successful
 if(option === 'option1'){
   for (let i = 0; i < 13; i++){
  await Lesson.create({date:d, subject:req.param('subject')});
     d.setDate(d.getDate()+ 7);
   }
  return res.json(200, {id: 2});
 }
 else {
   await Lesson.create({date:d, subject:req.param('subject')});
   return res.success();
 }
};

