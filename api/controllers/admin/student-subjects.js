module.exports = async function studentSubjects (req, res) {
  //Get values
  var subjects = req.param('subjects');
  var studentID = req.param('student');


  //Switch for the number of subjects
  switch (subjects.length) {
    case 1:
      sails.log(1);
      await Student.addToCollection(studentID, 'subjects', [subjects[0]])
             .intercept('E_UNIQUE', (err)=> {
               return res.badRequest(err);
    });
      break;
    case 2:
      sails.log(2);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1]])
      .intercept('E_UNIQUE', (err)=> {
        return res.badRequest(err);
      });
      break;
    case 3:
      sails.log(3);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1],subjects[2]])
        .intercept('E_UNIQUE', (err)=> {
          return res.badRequest(err);
        });
      break;
    case 4:
      sails.log(4);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1],subjects[2],subjects[3]])
        .intercept('E_UNIQUE', (err)=> {
          return res.badRequest(err);
        });
      break;
    case 5:
      sails.log(5);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1],subjects[2],subjects[3],subjects[4]])
        .intercept('E_UNIQUE', (err)=> {
          return res.badRequest(err);
        });
      break;
    case  6:
      sails.log(6);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1],subjects[2],subjects[3],subjects[4],subjects[5]])
        .intercept('E_UNIQUE', (err)=> {
          return res.badRequest(err);
        });
  }
  //Loop through each subject and add student to each lesson of the subject
        for (let i = 0; i < subjects.length; i++) {
          var student = await Lesson.find({
            where: {subject: subjects[i]},
            select: ['id']
          });
          for (let i = 0; i < student.length; i++) {
            try {
              await Attendance.create({isPresent: false, lessons: student[i].id, students: studentID});
            } catch (err) {
              sails.log(err.name);
              sails.log("it didn't worked");
              return res.badRequest();
            }
            sails.log("it worked");
          }
        }
        return res.ok();
};

