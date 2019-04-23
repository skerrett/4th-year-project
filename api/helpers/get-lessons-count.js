module.exports = {


  friendlyName: 'Lessons count',


  description: 'Takes the Subject ID and counts the number of lessons up to this date',


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
    const something = await Lesson.count({}).where({'date': {'>=': start, '<=': end}, subject: inputs.id});

    sails.log("Number of lessons:",something);
    return exits.success({
      count: something
    })
  }


};

