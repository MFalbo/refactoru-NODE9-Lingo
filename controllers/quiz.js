var beGlobal = require('node-beglobal');
var beglobal = new beGlobal.BeglobalAPI({
  api_token: 'QFQv%2ByR2w0YF9RyjqHagrw%3D%3D'
});
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/lingo');

// var Word = mongoose.model('word', {
// 	word: String,
// 	language: String,
// 	languageCode: String
// });
var Word = require('../models/quiz.js');

module.exports = {
	main: function(req, res) {
		res.render('quiz');
	},
	start: function(req, res) {
		var fromLang = req.body.from;
		var toLang = req.body.to;
		// console.log(fromLang);
		// var randWord = Word.find({languageCode: fromLang}).limit(1).skip(Math.random()*100).exec(function(err, word){
		// 	if(err){
		// 		console.log(err);
		// 	}
		// });
		Word.find({languageCode: fromLang}).limit(1).skip(Math.random()*100).exec(function(err,doc){
			// console.log(doc[0].word);
			res.render('quizstart', 
			{
				from: fromLang,
				to: toLang,
				text: doc[0].word
			});
		});
		// console.log(randWord);
		
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
	},

	question: function(req,res){
		Word.find({languageCode: 'eng'}).limit(1).skip(Math.random()*100).exec(function(err,doc){
			// console.log(doc[0].word);
			res.send(doc[0].word);
		});
	}
}