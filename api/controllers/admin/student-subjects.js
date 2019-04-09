module.exports = async function studentSubjects (req, res) {

  sails.log(req.allParams());

  var subjects = req.param('subjects');
  var studentID = req.param('student');

  sails.log(subjects.length);


  switch (subjects.length) {
    case 1:
      sails.log(1);
      await Student.addToCollection(studentID, 'subjects', [subjects[0]]);
      break;
    case 2:
      sails.log(2);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1]]);
      break;
    case 3:
      sails.log(3);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1],subjects[2]]);
      break;
    case 4:
      sails.log(4);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1],subjects[2],subjects[3]]);
      break;
    case 5:
      sails.log(5);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1],subjects[2],subjects[3],subjects[4]]);
      break;
    case  6:
      sails.log(6);
      await Student.addToCollection(studentID, 'subjects', [subjects[0],subjects[1],subjects[2],subjects[3],subjects[4],subjects[5]]);
  }
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
            }
            sails.log("it worked");
          }
        }
};
