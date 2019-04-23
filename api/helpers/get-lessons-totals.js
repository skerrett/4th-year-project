module.exports = {


  friendlyName: 'Lessons totals',


  description: 'Takes the Subject ID and add the average attendance of all lessons to form one number',


  inputs: {

    id: {
      description: 'The ID of the subject',
      example: 1,
      type: 'number',
      required: true
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs,exits) {
    const start = new Date();
    let end = new Date();
    start.setDate(start.getDate()-91);
    var something = await Lesson.find({where:{'date': {'>=': start, '<=': end}, subject: inputs.id},
      select: ['id']});
    sails.log("Something: ", something);
    sails.log("Something Else: ", something[0]);
    var totals = 0;
    for(let value of something){
      sails.log("Loop value: ", value.id);
      var obj = await sails.helpers.getLessonAttendance(value.id);
      sails.log("Loop obj ", obj);
      totals += obj.Average;
    }

    sails.log("Totals", totals);

    var count = await sails.helpers.getLessonsCount(inputs.id);
    var average = (totals/count.count);

    sails.log("Average: ", average);
    return exits.success({
      Average: average
    })
  }


};

