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
	$('.from-language').on('click', function(){
		console.log($(this).find('em').text());
		$("#transFrom").val($(this).find('em').text());
	});

	$('.to-language').on('click', function(){
		console.log($(this).find('em').text());
		$("#transTo").val($(this).find('em').text());
	});

	var quizArr = [];

	$('#answer-btn').on('submit', function(e) {
		e.preventDefault();

		var questionObj = {
			word: $('#transWord').text(),
			answer: $('#user-ans').val(),
			correct: null
		}

		quizArr.push(questionObj);

		if(quizArr.length < 10){
			$.post('/quiz/result', {
				text: $('#transWord').text(),
				from: 'eng',
				to: 'spa',
				quiz: quizArr

			}, function(data) {
				console.log(data);
				$('#transAns').empty();


				if(data.results.translation.toLowerCase() === $('#user-ans').val().toLowerCase()) {
					$('#transAns').append('<p>Correct</p>');
					questionObj.correct = true;
				}

				else {
					$('#transAns').append('<p>Incorrect, the correct answer is ' + data.results.translation + '</p>');
					questionObj.correct = false;
				}

				console.log(quizArr);

				$('#user-ans').val('');

			});	
		}
		else{
			window.location.href='http://localhost:8627/quiz/complete';
		}
	});

	$('#nextQues').on('click', function(){
		$('#transAns').empty();
		$.get('/quiz/question', function(data){
			$('#transWord').empty();
			$('#transWord').text(data);
		});
	});
});