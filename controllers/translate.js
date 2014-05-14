var beGlobal = require('node-beglobal');
var beglobal = new beGlobal.BeglobalAPI({
  api_token: 'QFQv%2ByR2w0YF9RyjqHagrw%3D%3D'
});

module.exports = {
	translate: function(req, res) {
		res.render('translate');
	},

	result: function(req,res){
		beglobal.translations.translate(
		 	 {text: req.body.text, from: req.body.from, to: req.body.to},
		  	function(err, results) {
			    if (err) {
			      return console.log(err);
			    }
				res.render('result', {results: results});
			}
		);	
	}

}