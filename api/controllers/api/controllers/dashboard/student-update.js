module.exports = {


  friendlyName: 'Update student attendance',


  description: 'Update the attendance for the logged-in user.',


  inputs: {

    nfcCode: {
      description: 'The students nfcCode.',
      example: '20356481',
      required: true
    }

  },


  fn: async function (inputs, exits) {




    var student = await Student.find({}).where({nfcCode: inputs.nfcCode}).populate('subjects');

    sails.log(student[0].subjects.length);
    sails.log(student);


    // gets the lesson that the student takes and ensure that the student is on-time before updating attendance
     for (var i = 0; i < student[0].subjects.length; i++){
       sails.log(student[0].subjects[i].id);
       var date1 = await Lesson.find({where:{subject: student[0].subjects[i].id},select: ['date']});
       sails.log("lenght"+date1.length);
       for (var j = 0; j < +date1.length; j++){
         var date = new Date();
         var difference = (date - date1[j].date);
         if(difference > 0 && difference < 3600000){
           sails.log(" "+difference+ "on-time");
           sails.log(student[0].subjects[i].subjectName);
         }
       }
     }


      return exits.success();

  }


};
