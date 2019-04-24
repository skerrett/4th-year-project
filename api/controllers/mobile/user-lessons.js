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

    const start = new Date();
    let end = new Date();
    end.setDate(end.getDate()+7);
    var lesson = [];
    for (let value of subject) {
     var values =  await Lesson.find({}).populate('subject').where({'date': {'>=': start, '<': end},subject: value.id}).sort(
       'date ASC');
     for(let x of values) {
       var obj = {
         'name': x.subject.subjectName,
         'date': x.date,
         'id': x.id,
       };
       lesson.push(obj);
     }
      //sails.log(values);
    }

    /*
    let myJson = JSON.stringify(lesson);

  var myvar = myJson.replace(/[\[\]']+/g, '');
*/


    return exits.success(lesson)

  }

};
