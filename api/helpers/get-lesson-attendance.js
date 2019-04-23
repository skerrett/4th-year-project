module.exports = {


  friendlyName: 'Lessons attendance',


  description: 'Takes the Lesson ID and calculates the attendance for that class',


  inputs: {

    id: {
      description: 'The ID of the Lesson',
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


  fn: async function (inputs, exits) {

    const total = await Attendance.count({}).where({lessons: inputs.id});
    const present = await Attendance.count({}).where({lessons: inputs.id, isPresent: true});

    sails.log("Total:" ,total);
    sails.log("present:",present);

    let average = (present/total)*100;

    return exits.success({
      Average: average
    })
  }
};

