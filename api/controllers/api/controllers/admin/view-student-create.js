module.exports = {


  friendlyName: 'View create students page',


  description: 'Display the dashboard "Create Students" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/student-create',
      description: 'Display the create subjects page for admin users.'
    },

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
