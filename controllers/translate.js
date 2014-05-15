var beGlobal = require('node-beglobal');
var beglobal = new beGlobal.BeglobalAPI({
  api_token: 'QFQv%2ByR2w0YF9RyjqHagrw%3D%3D'
});

var languageList = require('../models/translate.js');

module.exports = {
	translate: function(req, res) {
		res.render('translate', {allLanguages: languageList});
	},

	result: function(req,res){
		beglobal.translations.translate(
		 	 {text: req.body.text, from: req.body.from, to: req.body.to},
		  	function(err, results) {
			    if (err) {
			    	res.redirect('/translate/error');
			    	return console.log(err);
			    }
				res.render('result', {results: results, allLanguages: languageList});
			}
		);	
	},

	error: function(req,res){
		res.render('error');
	}

}