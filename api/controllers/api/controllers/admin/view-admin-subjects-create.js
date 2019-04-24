module.exports = {


  friendlyName: 'View create subjects page',


  description: 'Display the dashboard "Create Subjects" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/subjects-create',
      description: 'Display the create subjects page for admin users.'
    },

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
