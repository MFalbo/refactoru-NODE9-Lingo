$(document).ready(function() {

// $.post('/translate', function(data) {
// 	console.log(data);
// 	beglobal.translations.translate(
// 	 	 {text: data.text, from: data.from, to: data.to},
// 	  	function(err, results) {
// 	    if (err) {
// 	      return console.log(err);
// 	    }
// 	    // translation = results.translation;
// 	    // console.log(results);
// 	    // res.render('translate', {translation: results});
// 	    $('body').append('<p>' + results.translation)
// 	});
// });
	$('#answer-btn').on('submit', function(e) {
		e.preventDefault();
		$.post('/quiz/result', {
			text: $('#text').val(),
			from: 'eng',
			to: 'spa'
		}, function(data) {
			console.log(data);
			if(data.results.translation.toLowerCase() === $('#user-ans').val().toLowerCase()) {
				$('body').append('<p>Correct</p>');
			}

			else {
				$('body').append('<p>Incorrect, the correct answer is ' + data.results.translation + '</p>');
			}
		});	
	});
});