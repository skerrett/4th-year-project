module.exports = async function updateAttendance(req, res) {

  var studentId = await Student.find({where: {nfcCode: req.param('input')},
    select: ['id']});
  //Not Found
  if (studentId === undefined || studentId.length === 0) {

  return res.badRequest();
  }
  //Else update
  await Attendance.update({lessons: req.param('lesson'),students: studentId.id }).set({
    isPresent:true
  });
   return res.ok();
};
