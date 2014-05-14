var express = require('express');
var bodyParser = require('body-parser');
var beGlobal = require('node-beglobal');
var translate = require('./controllers/translate.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var beglobal = new beGlobal.BeglobalAPI({
  api_token: 'QFQv%2ByR2w0YF9RyjqHagrw%3D%3D'
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/translate', translate.translate);
app.post('/translate/result', translate.result);

app.get('/quiz', function(req, res) {
	res.render('quiz');
});

app.get('/progress', function(req, res) {
	res.render('progress');
});

var server = app.listen(8627, function() {
	console.log('Express server listening on port ' + server.address().port);
});
