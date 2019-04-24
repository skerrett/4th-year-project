module.exports = {


  friendlyName: 'View admin subjects page',


  description: 'Display the admin subjects page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/subjects',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
