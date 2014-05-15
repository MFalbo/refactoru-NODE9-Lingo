var beGlobal = require('node-beglobal');
var beglobal = new beGlobal.BeglobalAPI({
  api_token: 'QFQv%2ByR2w0YF9RyjqHagrw%3D%3D'
});

// beglobal.translations.translate(
// 		 	 {text: req.body.text, from: req.body.from, to: req.body.to},
// 		  	function(err, results) {
// 			    if (err) {
// 			    	res.redirect('/translate/error');
// 			    	return console.log(err);
// 			    }
// 				res.render('result', {results: results, allLanguages: languageList});
// 			}
// 		);	

module.exports = {
	main: function(req, res) {
	res.render('quiz');
	},
	start: function(req, res) {
		var fromLang = req.body.from;
		var toLang = req.body.to;

		res.render('quizstart', 
		{
			from: fromLang,
			to: toLang
		});
	},
	result: function(req, res) {
		beglobal.translations.translate(
		 	 {text: req.body.text, from: req.body.from, to: req.body.to},
		  	function(err, results) {
			    if (err) {
			    	res.redirect('/translate/error');
			    	return console.log(err);
			    }
				res.send('/quiz/result', {results: results});
			}
		);	
	}
}