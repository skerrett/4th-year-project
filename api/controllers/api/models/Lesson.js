module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    date: {
      type: 'ref',
      columnType: 'datetime',
      required: true,
      description: 'date of the lesson',
    },

    subject: {
    model: 'subject'
    },

    attendances: {
      collection: 'attendance',
      via: 'lessons',
    }
  }
};
