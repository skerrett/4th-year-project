module.exports = {


  friendlyName: 'Subject stats',


  description: 'Takes the subject ID and finds the average attendance for that subject',


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

    const average = sails.helpers.getLessonsTotals(inputs.id);

    return exits.success({
      Average: average
    })
  }


};

