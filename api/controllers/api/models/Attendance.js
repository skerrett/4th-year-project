module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    isPresent: {
      type: 'boolean',
      defaultsTo: false,
    },

    lessons: {
      model: 'lesson',
    },
    students: {
      model: 'student'
    }
  },
};
/*
  afterUpdate:fn(updatedRecord, proceed) {
    if(updatedRecord.isPresent === true){

    }
}
};
*/
