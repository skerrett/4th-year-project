/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome':            { action: 'dashboard/view-welcome' },
  'GET /subject':            { action:   'dashboard/view-subject' },
  'GET /student':            { action:   'dashboard/view-student' },
  'GET /lesson':            { action:   'dashboard/view-lesson' },
  'GET /attendance':         { action:   'dashboard/view-attendance' },


  'GET /history':            { action:   'history/view-subject-history' },
  'GET /history/lesson':     { action:   'history/view-lesson-history' },

  'GET /legal/terms':        { view:   'pages/legal/terms' },
  'GET /legal/privacy':      { view:   'pages/legal/privacy' },


  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { view:   'pages/entrance/confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  //"GET /csrfToken": { action: "security/grant-csrf-token" },

  'GET /admin/subject':             { action:   'admin/view-subjects' },
  'GET /admin/lesson':              { action:   'admin/view-lessons' },
  'GET /admin/attendance':          { action:   'admin/view-attendance' },
  'GET /admin/subject/create':      { action:    'admin/view-admin-subjects-create'},
  'GET /admin/student/create':      { action:    'admin/view-student-create'},
  'GET /admin/lesson/create':       { action:   'admin/view-lesson-create' },
  'GET /admin/studentSubject':      { action:   'admin/view-student-subjects' },
  'GET /admin/users':               {action: 'admin/view-users'},
  'GET /admin/users/edit':          {action: 'admin/users-edit'},
  'GET /admin/subject/edit':          {action: 'admin/subject-edit'},
  'GET /admin/lesson/edit':          {action: 'admin/lesson-edit'},
  'POST /admin/create-subject':     {action: 'admin/subjects-create'},
  'POST /admin/create-lesson':      {action: 'admin/lessons-create'},
  'POST /admin/create-student':     {action: 'admin/student-create'},
  'POST /admin/student-subject':    {action: 'admin/student-subjects'},

//mobile api
  'PATCH /mobile/present':    {action: 'mobile/student-present',csrf: false},
  'PUT /mobile/login':    {action: 'mobile/user-login',csrf: false},
  'GET /mobile/lesson':    {action: 'mobile/user-lessons'},


  //stats
  'GET /statistics/home': {action: 'statistics/home'},
  'GET /statistics/home/lessons': {action: 'statistics/lesson'},
  'GET /statistics/home/students': {action: 'statistics/student'},
  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the CloudSDK library.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },

  'PATCH /studentupdate':                             {action: 'dashboard/student-update'},

  'GET /csrfToken': { action: 'security/grant-csrf-token'},


  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',

};
