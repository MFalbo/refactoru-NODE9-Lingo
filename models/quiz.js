var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lingo');

var Word = mongoose.model('word', {
	word: String,
	language: String,
	languageCode: String
});

module.exports = Word;