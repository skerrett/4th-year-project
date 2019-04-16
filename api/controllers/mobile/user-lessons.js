module.exports = {


  friendlyName: 'Retrieve users lessons for mobile',


  description: 'Take the users ID and retrieves their lessons for the day',


  extendedDescription:
    `This action will take the mobile users ID and find the lessons they have for the remainder of the day`,


  inputs: {

    user: {
      description: 'user ID to retrieve lessons ',
      type: 'number',
      required: true
    },

  },


  exits: {

    success: {
      description: 'The lesson have been returned',
      extendedDescription:
        `Lessons for this week  `
    },

    notFound: {
      description: 'No lessons with the specified ID was found in the database.',
      responseType: 'notFound'
    }

  },


  fn: async function (inputs, exits) {
    var subject = await Subject.find({
      where: {'lecturer' : inputs.user},
      select:['id']
    });

    var start = new Date();
    let end = new Date();
    end.setDate(end.getDate()+7);
    var lesson = [];
    for (let value of subject) {
     var values =  await Lesson.find({}).where({'date': {'>=': start, '<': end},subject: value.id});
     lesson.push(values);
      sails.log(values);
    }
    let myJson = JSON.stringify(lesson);

    myvar = myJson.replace(/[\[\]']+/g, '');


    return exits.success(myvar)

  }

};
