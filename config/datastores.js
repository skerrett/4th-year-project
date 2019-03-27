module.exports.datastores = {
  default: {
    //adapter: require('sails-postgresql')	,
    //url: 'postgres://upmlzoptarypap:4592ad421d42ad919f6edd114cd8f00a6af873f7957b93841a446e5026615693@ec2-46-137-113-157.eu-west-1.compute.amazonaws.com:5432/d4v4p45ttcdt',
      //'mysql://newuser:seren@localhost:3306/easy',

    adapter: require('sails-mysql'),
    url: 'mysql://bb8ccae427d778:2b13e279@eu-cdbr-west-02.cleardb.net/heroku_2efd7961ccc3992?reconnect=true',
  }
};
