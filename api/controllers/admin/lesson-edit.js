module.exports = async function lesson (req, res) {

  //get the id passed in
  var lessonId = req.param('id');


  //find the lesson with this id.
  var stud = await Lesson.find({}).where({id: lessonId});


  var lessons = [];
  for(let x of stud) {

    //Spilt the Date
    var split_date = x.date.toString().split('G');
    //turn into JSON object
    var obj = {
      'subject': x.subject,
      'date': split_date[0],
      'id': x.id,
    };
    lessons.push(obj);
  }

 //Display the lesson edit page and send the lesson object
  return res.view('pages/admin/lesson-edit', {lesson: lessons});





};
