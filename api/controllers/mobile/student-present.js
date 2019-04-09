

module.exports = async function getQuote(req, res) {
   sails.log(req.param('input'));
   var text = req.param('input');
   var data = {Fname: "Darren",Lname: "Skerrett", nfcCode: "2345682739"};

   return res.json(200,{ Student: {
         "Fname": "Darren",
         "Lname": "Skerrett",
         "nfcCode": "2334545678",
       }});

};
