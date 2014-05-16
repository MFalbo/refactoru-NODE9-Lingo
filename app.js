var express = require('express');
var bodyParser = require('body-parser');
// var beGlobal = require('node-beglobal');
var randomWords = require('random-words');
var mongoose = require('mongoose');
var translate = require('./controllers/translate.js')
var index = require('./controllers/index.js');
var quiz = require('./controllers/quiz.js');
var progress = require('./controllers/progress.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// mongoose.connect('mongodb://localhost/lingo');

// var Word = mongoose.model('word', {
// 	word: String,
// 	language: String,
// 	languageCode: String
// });

// for (var i = 0; i < 100; i++) {
// 	var word = new Word({
// 		word: randomWords(),
// 		language: 'English',
// 		languageCode: 'eng'
// 	});
// 	word.save(function(err, data) {

// 		if(err) {
// 			console.log(err);
// 			return;
// 		}

// 	})

// }	

	// var beglobal = new beGlobal.BeglobalAPI({
//   api_token: 'QFQv%2ByR2w0YF9RyjqHagrw%3D%3D'
// });

// Home page route
app.get('/', index.home);

// Translate section routes
app.get('/translate', translate.translate);
app.post('/translate/result', translate.result);
app.get('/translate/error', translate.error);

// Quiz section routes
app.get('/quiz', quiz.main);
app.post('/quiz/start', quiz.start);
app.post('/quiz/result', quiz.result);
app.get('/quiz/question', quiz.question);
app.get('/quiz/complete', quiz.complete);

// Progress section routes
app.get('/progress', progress.main);

var server = app.listen(8627, function() {
	console.log('Express server listening on port ' + server.address().port);
});
