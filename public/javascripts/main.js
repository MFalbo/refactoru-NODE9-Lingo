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
			text: $('#transWord').text(),
			from: 'eng',
			to: 'spa'
		}, function(data) {
			console.log(data);
			$('#transAns').empty();
			if(data.results.translation.toLowerCase() === $('#user-ans').val().toLowerCase()) {
				$('#transAns').append('<p>Correct</p>');
			}

			else {
				$('#transAns').append('<p>Incorrect, the correct answer is ' + data.results.translation + '</p>');
			}
			$('#user-ans').val('');
		});	
	});

	$('#nextQues').on('click', function(){
			console.log('next button clicked');
		$.get('/quiz/question', function(data){
			console.log('next button Ajax call');
			console.log(data);
			$('#transWord').empty();
			$('#transWord').text(data);
		});
	});
});