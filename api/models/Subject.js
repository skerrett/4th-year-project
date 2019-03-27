/**
 *
 * subject has many students and students have many subjects
 * subject can only have one lecturer
 */
module.exports = {

  attributes: {

    subjectName: {
      type: 'string'
    },

    // Add a reference to Student
    students: {
      collection: 'student',
      via: 'subjects'
    },

    lecturer: {
      model: 'user'
    },

    lessons: {
      collection: 'lesson',
      via: 'subject'
    }
  }
};
