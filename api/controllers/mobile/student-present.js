

module.exports = async function getQuote(req, res) {
   sails.log(req.param('input'));
   var text = req.param('input');

   return res.json(200,{ nfcCode: 'Hello Darren' });
};
