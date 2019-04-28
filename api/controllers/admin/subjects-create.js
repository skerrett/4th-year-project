module.exports = async function create (req, res) {

  //handle blanks else create
  if(req.param('subject') === ''){
    return res.notFound();
  }
  else {
  Subject.findOrCreate({ subjectName: req.param('subject'), lecturer: req.param('lecturer') }, {subjectName: req.param('subject'), lecturer: req.param('lecturer')})
      .exec(async(err, subject, wasCreated)=> {
        if(wasCreated) {
          sails.log('Created a new subject: ' + subject.subjectName);
          return res.json(200, { id: subject.id })
        }
        else {
            sails.log('Found existing subject with matching lecturer: ' + subject.subjectName);
          return res.notFound();
          }
      });
  }

};

