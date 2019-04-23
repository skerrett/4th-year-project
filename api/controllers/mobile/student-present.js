

module.exports = async function updateAttendance(req, res) {

  var studentId = await Student.find({where: {nfcCode: req.param('input')},
    select: ['id']});
  await Attendance.update({lessons: req.param('lesson'),students: studentId.id }).set({
    isPresent:true
  });
   return res.ok();
};
