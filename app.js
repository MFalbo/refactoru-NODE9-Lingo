var express = require('express');
var bodyParser = require('body-parser');
var beGlobal = require('node-beglobal');
var translate = require('./models/translate.js')

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


app.get('/translate', function(req, res) {
	res.render('translate');
});

app.post('/translate/result', function(req,res){
	beglobal.translations.translate(
	 	 {text: req.body.text, from: req.body.from, to: req.body.to},
	  	function(err, results) {
		    if (err) {
		      return console.log(err);
		    }
			res.render('result', {results: results});
		}
	);	
});


var server = app.listen(8627, function() {
	console.log('Express server listening on port ' + server.address().port);
});
