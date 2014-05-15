var express = require('express');
var bodyParser = require('body-parser');
// var beGlobal = require('node-beglobal');
var translate = require('./controllers/translate.js')
var index = require('./controllers/index.js');
var quiz = require('./controllers/quiz.js');
var progress = require('./controllers/progress.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

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

// Progress section routes
app.get('/progress', progress.main);

var server = app.listen(8627, function() {
	console.log('Express server listening on port ' + server.address().port);
});
