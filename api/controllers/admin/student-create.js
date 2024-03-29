module.exports = async function createStudent (req, res) {
  //Finds or creates student passed in

  Student.findOrCreate({ Fname: req.param('fName'), Lname: req.param('surname') , nfcCode: req.param('studentCode')}, {Fname: req.param('fName'), Lname: req.param('surname') , nfcCode: req.param('studentCode')})
    .exec(async(err, student, wasCreated)=> {
      if(wasCreated) {
        sails.log('Created a new student: ' + student.Lname);
        return res.status(200).json({ id: student.id });
      }
      else {
        //return error
        sails.log('Found existing student with matching credentials: ' + student.Lname);
        return res.notFound();
      }
    });


};

